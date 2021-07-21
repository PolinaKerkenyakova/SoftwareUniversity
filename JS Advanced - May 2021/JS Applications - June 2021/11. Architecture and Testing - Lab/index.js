const { chromium } = require('playwright-chromium');

    (async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://softuni.bg/trainings/3348/js-applications-june-2021/internal#lesson-26932');
        await page.screenshot({path: `course.png`});
        await browser.close();
    })();