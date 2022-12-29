import { test } from '@playwright/test';
import { ScreenShot } from '../helper/ScreenShot';
import { LandryWeatherPage } from '../pages/LandryWeather';

test('洗濯指数をスクレイピングする', async ({ page }) => {
  const ConfigFile = require('config');
  const screenshot = new ScreenShot({ page: page, contextPath: `` });

  try {
    const landryWeatherPage = new LandryWeatherPage(page);
    await landryWeatherPage.goto();
    await landryWeatherPage.search();
    await page.pause();

  } catch (error) {
    screenshot.error();
    throw error;
  }
});