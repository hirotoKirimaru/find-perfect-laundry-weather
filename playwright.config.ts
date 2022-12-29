import { PlaywrightTestConfig } from '@playwright/test';
// 設定値詳細
// https://playwright.dev/docs/test-configuration/

// const configFile = require('Config');
const config: PlaywrightTestConfig = {
  use: {
    channel: 'chrome',
    // baseURL: configFile.url,
    screenshot: 'only-on-failure',　// 失敗するとスクショ撮る
    video: 'on-first-retry', // ビデオを撮るか
    trace: 'retain-on-failure', // トレースするか
  },
};
export default config;