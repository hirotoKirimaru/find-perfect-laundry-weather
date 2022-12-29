import { PlaywrightTestConfig } from '@playwright/test';
// 設定値詳細
// https://playwright.dev/docs/test-configuration/

const config: PlaywrightTestConfig = {
  use: {
    channel: 'chrome',
    screenshot: 'only-on-failure',　// 失敗するとスクショ撮る
  },
};
export default config;