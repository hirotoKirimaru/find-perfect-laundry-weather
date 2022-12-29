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

    async search() {
        const today = await this.page.innerText("//*[@class='today-weather']//img/..//span")
        console.log(today);
        await this.page.pause()
        const tommorow = await this.page.innerText("//*[@class='tomorrow-weather']//img/..//span")
        console.log(tommorow);
        await this.page.pause()

        // const _3 = await this.page.innerText(":nth-match(xpath//*[@class='forecast-point-week']//tr[2]/td, 0)")
        // console.log(_3);
        const tableDom = await this.page.$$("//*[@class='forecast-point-week']//tr[2]/td")

        await tableDom.forEach(async e => {
            // console.log(e.asElement)
            // console.log(e);

            // const a = await e.innerText
            const a = await (await e.waitForSelector("//img/../p")).innerText
            // await this.page.pause()
            console.log(a);
        })
    }
}