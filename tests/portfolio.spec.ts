import { expect, test } from '@playwright/test';

test('homepage renders senior positioning, SEO metadata, and fixed dark-space design', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Marlen Franto | Senior Flutter & Full-Stack Mobile Engineer');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.marlenfranto.com/');
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'Building Mobile Experiences That Work Beyond the Network.' })).toBeVisible();
  await expect(page.getByText('Technical Delivery & Client Collaboration')).toBeVisible();
  await expect(page.locator('.proof-strip')).toContainText('22');
  await expect(page.locator('.proof-strip')).toContainText('Showcased products');
  await expect(page.locator('[data-galaxy-canvas]')).toHaveCount(1);
  await expect(page.locator('[data-portfolio-galaxy]')).toHaveClass(/has-webgl|is-fallback/);
  await expect(page.locator('[data-portfolio-galaxy]')).toHaveAttribute('data-worlds', /"projects"/);
  if ((page.viewportSize()?.width ?? 0) > 1080) {
    await expect(page.locator('.journey-rail')).toBeVisible();
  } else {
    await expect(page.locator('.journey-rail')).toBeHidden();
  }
  await expect(page.getByText('Senior Mobile App Developer · Flutter Engineer')).toBeVisible();
  await expect(page.locator('[data-theme-toggle]')).toHaveCount(0);
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', /.+/);
});

test('mobile navigation is accessible and does not create horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menu = page.getByRole('button', { name: 'Open navigation menu' });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: 'Engineering', exact: true })).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
  await expect(page.locator('.cosmic-cursor')).toBeHidden();
});

test('reduced motion keeps content readable and removes cinematic movement', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  await expect(page.locator('[data-reveal]').first()).toHaveCSS('opacity', '1');
  await expect(page.locator('.galaxy-observatory')).toBeVisible();
  await expect(page.locator('[data-galaxy-canvas]')).toBeVisible();
  await expect(page.locator('.cosmic-cursor')).toBeHidden();
  await expect(page.locator('.hero h1')).toBeVisible();
});

test('scroll journey rotates the projects planet into focus', async ({ page }) => {
  await page.goto('/');
  await page.locator('#projects').evaluate((section) => section.scrollIntoView({ block: 'start' }));

  await expect(page.locator('[data-orbit-name]')).toHaveText('Missions');
  await expect(page.locator('#projects')).toHaveClass(/is-orbit-current/);
  await expect(page.locator('[data-nav-target="projects"]')).toHaveAttribute('aria-current', 'location');
});

test('work index exposes case studies and all showcased products', async ({ page }) => {
  await page.goto('/work/');

  await expect(page.getByRole('heading', { level: 1, name: /Mobile products delivered/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Perfecta/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Eurogrip/ }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /22 projects/ })).toBeVisible();
});

test('case study includes delivery planning and client communication evidence', async ({ page }) => {
  await page.goto('/work/perfecta-smart-grill-flutter/');

  await expect(page).toHaveTitle('Perfecta Flutter Case Study | Smart Grill Mobile App');
  await expect(page.getByRole('heading', { level: 1, name: 'Perfecta - Smart Grilling Companion App' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Discovery and requirements' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Project plan and milestones' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sprint planning approach' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Estimation and ETA communication' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Client feedback and follow-ups' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Release responsibilities' })).toBeVisible();
});

test('contact form remains accessible before and after hydration', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByLabel('Name')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Message')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible();
});
