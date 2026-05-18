# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cloud.spec.ts >> cloud login test
- Location: tests\cloud.spec.ts:49:1

# Error details

```
Error: browserType.connect: WebSocket error: wss://cdp.lambdatest.com/playwright 401 Unauthorized
{"status":401,"value":{"message":"LT01KRDHV65DFYGBDQZA9FAHH4FT-76D9B98D55-X6DMB-AP-SOUTH-1: Unauthorized, either Username or AccessKey is invalid"}}

Call log:
  - <ws connecting> wss://cdp.lambdatest.com/playwright
  - <ws unexpected response> wss://cdp.lambdatest.com/playwright 401 Unauthorized
{"status":401,"value":{"message":"LT01KRDHV65DFYGBDQZA9FAHH4FT-76D9B98D55-X6DMB-AP-SOUTH-1: Unauthorized, either Username or AccessKey is invalid"}}
  - <ws error> wss://cdp.lambdatest.com/playwright error WebSocket was closed before the connection was established
  - <ws connect error> wss://cdp.lambdatest.com/playwright WebSocket was closed before the connection was established
  - <ws disconnected> wss://cdp.lambdatest.com/playwright code=1006 reason=

```

# Test source

```ts
  1  | import path from 'path';
  2  | import { fileURLToPath } from 'url';
  3  | import dotenv from 'dotenv';
  4  | import { test, expect, chromium } from '@playwright/test';
  5  | 
  6  | const envPath = path.resolve(fileURLToPath(new URL('../.env', import.meta.url)));
  7  | dotenv.config({ path: envPath });
  8  | 
  9  | const LT_USERNAME = 'yugamghogia';
  10 | const LT_ACCESS_KEY ='zPQFhLBuB27Yn7Z4q9yuBb0b4SHAN7IhwwW116Nk08TMuYu'
  11 | 
  12 | console.log('LambdaTest Credentials:', {
  13 |   LT_USERNAME: LT_USERNAME ? '***' : 'Not Set',
  14 |   LT_ACCESS_KEY: LT_ACCESS_KEY ? '***' : 'Not Set',
  15 | });
  16 | 
  17 | if (!LT_USERNAME || !LT_ACCESS_KEY) {
  18 |   throw new Error(
  19 |     'LambdaTest credentials are required. Set LT_USERNAME and LT_ACCESS_KEY in environment variables or a local .env file.'
  20 |   );
  21 | }
  22 | 
  23 | const capabilities = {
  24 |   browserName: 'Chrome',
  25 |   browserVersion: 'latest',
  26 |   'LT:Options': {
  27 |     platform: 'Windows 11',
  28 |     build: 'Vite App Build',
  29 |     name: 'Login Test',
  30 |     user: LT_USERNAME,
  31 |     accessKey: LT_ACCESS_KEY,
  32 |     network: true,
  33 |   },
  34 | };
  35 | 
  36 | const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
  37 |   JSON.stringify(capabilities)
  38 | )}`;
  39 | 
  40 | /**
  41 |  * Cloud execution
  42 |  * - Connects to LambdaTest / TestMu cloud using chromium.connect().
  43 |  * - Uses environment variables for credentials.
  44 |  * - Takes a screenshot and verifies the local Vite app title.
  45 |  *
  46 |  * If you want to run against a local app from the cloud, ensure a LambdaTest tunnel
  47 |  * or equivalent local-host access is available.
  48 |  */
  49 | test('cloud login test', async () => {
> 50 |   const browser = await chromium.connect({ wsEndpoint });
     |                                  ^ Error: browserType.connect: WebSocket error: wss://cdp.lambdatest.com/playwright 401 Unauthorized
  51 |   const context = await browser.newContext();
  52 |   const page = await context.newPage();
  53 | 
  54 |   await page.goto('http://localhost:4321');
  55 |   await expect(page).toHaveTitle(/GRFF Blog Admin/);
  56 | 
  57 |   await page.screenshot({ path: 'cloud-login-test.png', fullPage: true });
  58 |   await browser.close();
  59 | });
  60 | 
```