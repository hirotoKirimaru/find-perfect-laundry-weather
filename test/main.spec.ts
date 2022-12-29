import { test } from '@playwright/test';
import { ScreenShot } from '../helper/ScreenShot';
import { LandryWeatherPage } from '../pages/LandryWeather';

test('洗濯指数をスクレイピングする', async ({ page }) => {
  const ConfigFile = require('config');
  const screenshot = new ScreenShot({ page: page, contextPath: `` });

  try {
    screenshot.execute();
    const landryWeatherPage = new LandryWeatherPage(page);
    await landryWeatherPage.goto();
    screenshot.execute();

  } catch (error) {
    screenshot.error();
    throw error;
  }
});