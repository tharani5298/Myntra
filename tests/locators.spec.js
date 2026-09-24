import{test} from '@playwright/test'
test() 'locators',async({page}) => {
    await page.goto("https://www.makemytrip.com/")
    await page.locator('[class="headerIcons makeFlex hrtlCenter column active"]').click(); 
}


test() 'locators',async({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('[class="headerIcons makeFlex hrtlCenter column active"]').click(); 
}