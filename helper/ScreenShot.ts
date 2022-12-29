import type { Page } from 'playwright';
import { requiredParam } from './Helper';

type ScreenShotType = {
    page: Page,
    index?: number,
    root?: string,
    contextPath?: string
};

export class ScreenShot {
    readonly page: Page;
    index: number;
    root: string;
    contextPath: string;

    constructor({
        page = requiredParam('page'),
        index = 0,
        root = "images/",
        contextPath = ""
    } : ScreenShotType) {
        this.page = page;
        this.index = index;
        this.root = root ;
        this.contextPath = contextPath;

        // // 古いファイルを削除する
        // const fs = require('fs');
        // const dir = './images';

        // fs.readdir(dir, function (err, files) {
        //     if (err) {
        //         throw err;
        //     }

        //     files.forEach(function (file) {
        //         fs.unlink(`${dir}/${file}`, function (err) {
        //             if (err) {
        //                 throw (err);
        //             }
        //             console.log(`deleted ${file}`);
        //         });
        //     });
        // });
    }

    async execute(fullSize = false) {
        await this.page.screenshot({ path: `${this.root}${this.index++}-debug-success.png` })
    }

    async targetCapture(fileName: string) {
        await this.page.screenshot({ path: `${this.root}${this.contextPath}${fileName}.png`, fullPage: true })
    }

    async error() {
        await this.page.screenshot({ path: `${this.root}${this.index++}-debug-error.png` })
    }


}