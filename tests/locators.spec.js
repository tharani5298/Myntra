import{test} from '@playwright/test'
// test() 'locators',async({page}) => {
//     await page.goto("https://www.makemytrip.com/")
//     await page.locator('[class="headerIcons makeFlex hrtlCenter column active"]').click(); 
// }


// test() 'locators',async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.locator('[class="headerIcons makeFlex hrtlCenter column active"]').click(); 
// }

test('inbuild fixtures', async({browser}) => {
    const browser1 = await browser.newContext();
    const flipkart = await browser1.newPage();
    await flipkart.goto("https://www.flipkart.com/");
    await  flipkart.waitForTimeout(2000);
    const redbus = await browser1.newPage();
    await redbus.goto("https://www.redbus.in/");
    await redbus.waitForTimeout(2000);
})