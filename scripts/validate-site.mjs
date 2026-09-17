import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

const siteUrl = 'https://www.marlenfranto.com';
const dist = join(process.cwd(), 'dist');

const required = [
  'index.html',
  'work/index.html',
  'work/perfecta-smart-grill-flutter/index.html',
  'work/eurogrip-offline-first-flutter/index.html',
  'work/pegasus-construction-mobile-app/index.html',
  'work/hidden-kingdoms-native-mobile-app/index.html',
  'work/optx-real-time-casino-operations/index.html',
  'about/index.html',
  'resume/index.html',
  'insights/index.html',
  'insights/offline-first-flutter-apps/index.html',
  'rss.xml',
  'robots.txt',
  'sitemap-index.xml',
  '404.html',
  'manifest.webmanifest',
  'marlen-franto-resume.pdf',
];

const expectedStructuredTypes = {
  'index.html': ['WebSite', 'Person'],
  'work/index.html': ['CollectionPage', 'BreadcrumbList'],
  'about/index.html': ['ProfilePage', 'BreadcrumbList'],
  'resume/index.html': ['BreadcrumbList'],
  'insights/index.html': ['BreadcrumbList'],
  'insights/offline-first-flutter-apps/index.html': ['Article', 'BreadcrumbList'],
  'work/perfecta-smart-grill-flutter/index.html': ['Article', 'BreadcrumbList'],
  'work/eurogrip-offline-first-flutter/index.html': ['Article', 'BreadcrumbList'],
  'work/pegasus-construction-mobile-app/index.html': ['Article', 'BreadcrumbList'],
  'work/hidden-kingdoms-native-mobile-app/index.html': ['Article', 'BreadcrumbList'],
  'work/optx-real-time-casino-operations/index.html': ['Article', 'BreadcrumbList'],
};

const expectedCaseStudyRoutes = [
  '/work/perfecta-smart-grill-flutter/',
  '/work/eurogrip-offline-first-flutter/',
  '/work/pegasus-construction-mobile-app/',
  '/work/hidden-kingdoms-native-mobile-app/',
  '/work/optx-real-time-casino-operations/',
];

const draftInsightSlugs = [
  'flutter-native-sdks-connected-hardware',
  'real-time-mobile-dashboards',
  'estimating-mobile-projects-etas',
  'effective-sprint-reviews',
  'mobile-release-risks',
];

const vercelRuntimePrefixes = ['/_vercel/'];

const failures = [];
const warnings = [];

const formatBytes = (bytes) => `${Math.round(bytes / 1024)} KB`;
const toRoute = (file) => {
  if (file === 'index.html') return '/';
  if (file === '404.html') return '/404/';
  return `/${file.replace(/index\.html$/, '').replace(/\.html$/, '/')}`;
};
const toCanonical = (route) => new URL(route, siteUrl).toString();

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const parseAttributes = (tag) => {
  const attrs = {};
  const attrRegex = /([:@\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attrRegex.exec(tag))) {
    const [, name, doubleQuoted, singleQuoted, bare] = match;
    if (name === tag.match(/^<\/?([\w-]+)/)?.[1]) continue;
    attrs[name] = doubleQuoted ?? singleQuoted ?? bare ?? '';
  }
  return attrs;
};

const htmlTags = (html, tagName) => {
  const regex = new RegExp(`<${tagName}\\b[^>]*>`, 'gi');
  return [...html.matchAll(regex)].map((match) => parseAttributes(match[0]));
};

const getMeta = (html, key) => {
  const metas = htmlTags(html, 'meta');
  return metas.find((meta) => meta.name === key || meta.property === key)?.content;
};

const getLink = (html, rel) => {
  const links = htmlTags(html, 'link');
  return links.find((link) => link.rel === rel)?.href;
};

const getTitle = (html) => html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();

const extractJsonLd = (html, file) => {
  const matches = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  return matches.flatMap((match, index) => {
    try {
      return [JSON.parse(match[1])];
    } catch (error) {
      failures.push(`${file} has invalid JSON-LD block ${index + 1}: ${error.message}`);
      return [];
    }
  });
};

const typeList = (items) =>
  items.flatMap((item) => {
    if (!item || typeof item !== 'object') return [];
    const type = item['@type'];
    return Array.isArray(type) ? type : [type].filter(Boolean);
  });

const pathForUrl = (rawUrl) => {
  if (!rawUrl || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:') || rawUrl.startsWith('javascript:')) return undefined;
  if (rawUrl.startsWith('#')) return { pathname: undefined, hash: rawUrl.slice(1) };

  try {
    const url = rawUrl.startsWith('http') ? new URL(rawUrl) : new URL(rawUrl, siteUrl);
    if (url.origin !== siteUrl) return undefined;
    return { pathname: url.pathname, hash: url.hash.slice(1) };
  } catch {
    return undefined;
  }
};

const isRuntimeServedPath = (pathname) => vercelRuntimePrefixes.some((prefix) => pathname?.startsWith(prefix));

const fileForPathname = (pathname) => {
  if (!pathname || pathname === '/') return join(dist, 'index.html');
  const normalized = pathname.replace(/^\//, '');
  if (pathname.endsWith('/')) return join(dist, normalized, 'index.html');
  return join(dist, normalized);
};

const routeHasAnchor = (pathname, hash) => {
  const file = fileForPathname(pathname || '/');
  if (!existsSync(file)) return false;
  const html = readFileSync(file, 'utf8');
  const escaped = hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b(?:id|name)=["']${escaped}["']`).test(html);
};

const collectLocalReferences = (html) => {
  const refs = [];

  for (const tagName of ['a', 'link', 'script', 'img', 'source']) {
    for (const attrs of htmlTags(html, tagName)) {
      if (tagName === 'link' && attrs.rel === 'canonical') continue;
      if (attrs.href) refs.push(attrs.href);
      if (attrs.src) refs.push(attrs.src);
      if (attrs.srcset) {
        for (const candidate of attrs.srcset.split(',')) {
          refs.push(candidate.trim().split(/\s+/)[0]);
        }
      }
    }
  }

  return refs;
};

const htmlFiles = required.filter((file) => file.endsWith('.html'));

for (const file of required) {
  const path = join(dist, file);
  if (!existsSync(path)) failures.push(`Missing ${file}`);
}

for (const file of htmlFiles) {
  const path = join(dist, file);
  if (!existsSync(path)) continue;

  const html = readFileSync(path, 'utf8');
  const route = toRoute(file);
  const expectedCanonical = toCanonical(route);
  const is404 = file === '404.html';
  const title = getTitle(html);
  const description = getMeta(html, 'description');
  const robots = getMeta(html, 'robots');
  const canonical = getLink(html, 'canonical');
  const structuredData = extractJsonLd(html, file);
  const structuredTypes = typeList(structuredData);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const mainCount = (html.match(/<main\b/gi) ?? []).length;

  if (mainCount !== 1) failures.push(`${file} should contain exactly one main landmark; found ${mainCount}`);
  if (!is404 && h1Count !== 1) failures.push(`${file} should contain exactly one H1; found ${h1Count}`);
  if (!title || title.length < 20 || title.length > 70) failures.push(`${file} title length should be 20-70 chars`);
  if (!is404 && (!description || description.length < 70 || description.length > 180)) failures.push(`${file} description length should be 70-180 chars`);
  if (!canonical) failures.push(`${file} is missing canonical metadata`);
  if (!is404 && canonical !== expectedCanonical) failures.push(`${file} canonical should be ${expectedCanonical}, received ${canonical}`);
  if (is404 && robots !== 'noindex,nofollow') failures.push('404.html must be noindex,nofollow');
  if (!is404 && robots !== 'index,follow') failures.push(`${file} must be index,follow`);

  for (const key of ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
    if (!getMeta(html, key)) failures.push(`${file} is missing ${key}`);
  }

  if (!is404 && getMeta(html, 'og:url') !== expectedCanonical) failures.push(`${file} og:url must match canonical`);
  if (!is404 && !getMeta(html, 'og:image')?.startsWith(siteUrl)) failures.push(`${file} og:image must be absolute on the canonical domain`);
  if (!getMeta(html, 'theme-color')) failures.push(`${file} is missing theme-color`);
  if (!getLink(html, 'manifest')) failures.push(`${file} is missing web manifest link`);
  if (!getLink(html, 'icon')) failures.push(`${file} is missing favicon link`);

  if (!is404 && structuredData.length === 0) failures.push(`${file} is missing JSON-LD`);
  for (const expectedType of expectedStructuredTypes[file] ?? []) {
    if (!structuredTypes.includes(expectedType)) failures.push(`${file} JSON-LD is missing ${expectedType}`);
  }

  if (html.includes('framer-motion') || html.includes('react-icons')) failures.push(`${file} includes removed animation/icon libraries`);
  if (html.includes('30+')) failures.push(`${file} still uses unverified 30+ project copy`);
  if (html.includes('data-theme-toggle')) failures.push(`${file} should not include a theme switch`);
  if (html.includes('localStorage.getItem(\'theme\')') || html.includes('localStorage.setItem(\'theme\'')) failures.push(`${file} should not persist a theme preference`);

  for (const ref of collectLocalReferences(html)) {
    const parsed = pathForUrl(ref);
    if (!parsed) continue;
    if (parsed.hash && !routeHasAnchor(parsed.pathname, parsed.hash)) failures.push(`${file} links to missing anchor ${ref}`);
    if (!parsed.pathname) continue;
    if (isRuntimeServedPath(parsed.pathname)) continue;
    const target = fileForPathname(parsed.pathname);
    if (!existsSync(target)) failures.push(`${file} links to missing local asset/page ${ref}`);
  }
}

const homePath = join(dist, 'index.html');
if (existsSync(homePath)) {
  const html = readFileSync(homePath, 'utf8');
  for (const phrase of ['Technical Delivery', 'Technology Constellation', 'Architecture Lab', 'Engineering Problems', '22']) {
    if (!html.includes(phrase)) failures.push(`Homepage missing required phrase: ${phrase}`);
  }
}

const workPath = join(dist, 'work/index.html');
if (existsSync(workPath)) {
  const html = readFileSync(workPath, 'utf8');
  for (const route of expectedCaseStudyRoutes) {
    if (!html.includes(`href="${route}"`)) failures.push(`Work index missing case-study route ${route}`);
  }
}

const allBuiltFiles = existsSync(dist) ? walk(dist) : [];
const allBuiltText = allBuiltFiles
  .filter((path) => ['.html', '.xml', '.txt', '.json'].includes(extname(path)))
  .map((path) => readFileSync(path, 'utf8'))
  .join('\n');

for (const slug of draftInsightSlugs) {
  if (allBuiltText.includes(`/insights/${slug}/`)) failures.push(`Draft insight leaked into production output: ${slug}`);
}

const robotsPath = join(dist, 'robots.txt');
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!robots.includes('User-agent: *')) failures.push('robots.txt missing User-agent: *');
  if (!robots.includes('Allow: /')) failures.push('robots.txt missing Allow: /');
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap-index.xml`)) failures.push('robots.txt missing canonical sitemap URL');
}

const sitemapIndexPath = join(dist, 'sitemap-index.xml');
const sitemapPath = join(dist, 'sitemap-0.xml');
if (existsSync(sitemapIndexPath)) {
  const sitemapIndex = readFileSync(sitemapIndexPath, 'utf8');
  if (!sitemapIndex.includes(`${siteUrl}/sitemap-0.xml`)) failures.push('sitemap-index.xml missing sitemap-0.xml reference');
}
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const route of ['/', '/work/', '/about/', '/resume/', '/insights/', '/insights/offline-first-flutter-apps/', ...expectedCaseStudyRoutes]) {
    if (!sitemap.includes(toCanonical(route))) failures.push(`sitemap-0.xml missing ${route}`);
  }
  if (sitemap.includes('/404')) failures.push('sitemap should not include 404');
  for (const slug of draftInsightSlugs) {
    if (sitemap.includes(slug)) failures.push(`sitemap includes draft insight ${slug}`);
  }
}

const rssPath = join(dist, 'rss.xml');
if (existsSync(rssPath)) {
  const rss = readFileSync(rssPath, 'utf8');
  if (!rss.includes('<rss version="2.0">')) failures.push('rss.xml missing RSS 2.0 root');
  if (!rss.includes(`${siteUrl}/insights/offline-first-flutter-apps/`)) failures.push('rss.xml missing published insight');
  for (const slug of draftInsightSlugs) {
    if (rss.includes(slug)) failures.push(`rss.xml includes draft insight ${slug}`);
  }
}

const manifestPath = join(dist, 'manifest.webmanifest');
if (existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (manifest.name !== 'Marlen Franto Portfolio') failures.push('manifest.webmanifest has unexpected name');
    if (manifest.start_url !== '/') failures.push('manifest.webmanifest should start at /');
    if (manifest.theme_color !== '#050816') failures.push('manifest.webmanifest should use the deep-space theme color');
  } catch (error) {
    failures.push(`manifest.webmanifest is invalid JSON: ${error.message}`);
  }
}

const pdfPath = join(dist, 'marlen-franto-resume.pdf');
if (existsSync(pdfPath) && statSync(pdfPath).size < 3000) failures.push('Resume PDF looks too small');

const jsFiles = allBuiltFiles.filter((path) => extname(path) === '.js');
if (existsSync(homePath)) {
  const homeHtml = readFileSync(homePath, 'utf8');
  const initialScriptPaths = htmlTags(homeHtml, 'script')
    .map((attrs) => pathForUrl(attrs.src)?.pathname)
    .filter((pathname) => pathname && !isRuntimeServedPath(pathname));
  const initialJsGzip = initialScriptPaths.reduce((total, pathname) => {
    const path = fileForPathname(pathname);
    return total + (existsSync(path) ? gzipSync(readFileSync(path)).length : 0);
  }, 0);
  if (initialJsGzip > 50 * 1024) {
    failures.push(`Initial compressed JavaScript exceeds strict launch budget: ${formatBytes(initialJsGzip)} > 50 KB`);
  }
}

for (const path of jsFiles) {
  const compressedSize = gzipSync(readFileSync(path)).length;
  if (compressedSize > 225 * 1024) {
    failures.push(`Lazy JavaScript chunk is too large: ${relative(dist, path)} ${formatBytes(compressedSize)} > 225 KB`);
  }
}

const modernImages = allBuiltFiles.filter((path) => ['.avif', '.webp'].includes(extname(path)));
for (const image of modernImages) {
  const size = statSync(image).size;
  const name = relative(dist, image);
  if (name.includes('profile') && size > 150 * 1024) failures.push(`Hero portrait modern image too large: ${name} ${formatBytes(size)}`);
  if (!name.includes('profile') && size > 80 * 1024) failures.push(`Modern project image too large: ${name} ${formatBytes(size)}`);
}

if (existsSync(homePath)) {
  const html = readFileSync(homePath, 'utf8');
  const cssHrefs = htmlTags(html, 'link')
    .filter((attrs) => attrs.rel === 'stylesheet')
    .map((attrs) => pathForUrl(attrs.href)?.pathname)
    .filter(Boolean);
  const eagerModernImages = [...html.matchAll(/<picture>[\s\S]*?<img\b[^>]*loading=["']eager["'][^>]*>[\s\S]*?<\/picture>/gi)]
    .flatMap((match) => [...match[0].matchAll(/<source\b[^>]*srcset=["']([^"']+)["'][^>]*>/gi)])
    .flatMap((match) => match[1].split(',').map((candidate) => candidate.trim().split(/\s+/)[0]))
    .filter((src) => src.endsWith('.avif') || src.endsWith('.webp'))
    .map((src) => pathForUrl(src)?.pathname)
    .filter(Boolean);
  const largestEagerModernImage = Math.max(
    0,
    ...eagerModernImages.map((pathname) => {
      const path = fileForPathname(pathname);
      return existsSync(path) ? statSync(path).size : 0;
    }),
  );
  const homeTransfer =
    gzipSync(readFileSync(homePath)).length +
    cssHrefs.reduce((total, pathname) => {
      const path = fileForPathname(pathname);
      return total + (existsSync(path) ? gzipSync(readFileSync(path)).length : 0);
    }, 0) +
    largestEagerModernImage;

  if (homeTransfer > 700 * 1024) failures.push(`Estimated initial homepage transfer exceeds 700 KB: ${formatBytes(homeTransfer)}`);
}

if (warnings.length) console.warn(warnings.join('\n'));

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Site validation passed.');
