// 2 min price

 import { test } from '@playwright/test';

 test('Find minimum price', async ({ page }) => {
    await page.goto("https://www.myntra.com/boy-tshirts");


     const allPrices = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
     await allPrices.first().waitFor({ timeout: 50000 });
    const totalProductslist = await allPrices.count();
   let priceList = await allPrices.allTextContents();
    let Price = priceList.map((price) => Number(price.replace(/[^0-9]/g, '')));
   let minPrice = Math.min(...Price)   
     console.log('Minimumprice ' + minPrice);
     console.log('Total Products' + totalProductslist);

 })

