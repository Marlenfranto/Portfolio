import { insightArticles, siteConfig } from '../data/site';

export function GET() {
  const items = insightArticles
    .filter((article) => !article.draft)
    .map(
      (article) => `<item>
  <title><![CDATA[${article.title}]]></title>
  <link>${siteConfig.url}/insights/${article.slug}/</link>
  <guid>${siteConfig.url}/insights/${article.slug}/</guid>
  <pubDate>${new Date(article.publishedDate).toUTCString()}</pubDate>
  <description><![CDATA[${article.description}]]></description>
</item>`,
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${siteConfig.name} Insights</title>
  <link>${siteConfig.url}/insights/</link>
  <description>Mobile engineering and delivery leadership articles by ${siteConfig.name}.</description>
  ${items}
</channel>
</rss>`, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
