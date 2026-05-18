import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { test, expect, chromium } from '@playwright/test';

const envPath = path.resolve(fileURLToPath(new URL('../.env', import.meta.url)));
dotenv.config({ path: envPath });

const LT_USERNAME = 'yugamghogia';
const LT_ACCESS_KEY ='zPQFhLBuB27Yn7Z4q9yuBb0b4SHAN7IhwwW116Nk08TMuYu'

console.log('LambdaTest Credentials:', {
  LT_USERNAME: LT_USERNAME ? '***' : 'Not Set',
  LT_ACCESS_KEY: LT_ACCESS_KEY ? '***' : 'Not Set',
});

if (!LT_USERNAME || !LT_ACCESS_KEY) {
  throw new Error(
    'LambdaTest credentials are required. Set LT_USERNAME and LT_ACCESS_KEY in environment variables or a local .env file.'
  );
}

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'Vite App Build',
    name: 'Login Test',
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    network: true,
  },
};

const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
  JSON.stringify(capabilities)
)}`;

/**
 * Cloud execution
 * - Connects to LambdaTest / TestMu cloud using chromium.connect().
 * - Uses environment variables for credentials.
 * - Takes a screenshot and verifies the local Vite app title.
 *
 * If you want to run against a local app from the cloud, ensure a LambdaTest tunnel
 * or equivalent local-host access is available.
 */
test('cloud login test', async () => {
  const browser = await chromium.connect({ wsEndpoint });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:4321');
  await expect(page).toHaveTitle(/GRFF Blog Admin/);

  await page.screenshot({ path: 'cloud-login-test.png', fullPage: true });
  await browser.close();
});
