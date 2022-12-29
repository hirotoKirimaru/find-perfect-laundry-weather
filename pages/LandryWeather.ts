import type { Page } from 'playwright';

export class LandryWeatherPage {
    readonly page: Page;
    readonly configFile = require('Config');

    constructor(page: Page) {
        this.page = page;

    }

    async goto() {
        await this.page.goto(this.configFile.url);
    }
}