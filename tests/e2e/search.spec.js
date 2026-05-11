import { expect, test } from '@playwright/test';

test('homepage shows navbar and search bar', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByPlaceholder('Search Safdar or type a URL ')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
});

test('typing in search input works', async ({ page }) => {
  await page.goto('/');
  const input = page.getByPlaceholder('Search Safdar or type a URL ');
  await input.fill('vitest tutorial');
  await expect(input).toHaveValue('vitest tutorial');
});

test('search buttons look inactive before typing', async ({ page }) => {
  await page.goto('/');

  const searchBtn = page.getByRole('button', { name: 'Google Search' });
  await expect(searchBtn).toHaveClass(/search-actions__btn--disabled/);
});

test('lucky button shows on homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: "I'm Feeling Lucky" })).toBeVisible();
});

test('footer stacks on narrow screens', async ({ page }) => {
  await page.setViewportSize({ width: 480, height: 800 });
  await page.goto('/');

  const footer = page.locator('footer.safdar-browser-footer');
  await expect(footer).toBeVisible();
});
