import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: {
    baseURL: 'http://127.0.0.1:5502',
  },
  webServer: {
    command: 'npx --yes serve . -l 5502',
    port: 5502,
    reuseExistingServer: true,
  },
});
