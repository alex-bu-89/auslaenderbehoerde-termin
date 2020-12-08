
import { Browser, Page } from 'puppeteer';
import { PageDto } from '../types.d';
// import logger from '../../utils/logger';

/**
 * Handles cookie popup
 */
// async function handleCookie(page: Page) {
//   const cookieBtn = 'input[data-cel-widget="sp-cc-accept"]';
//   const cookieBtn2 = '#sp-cc-accept';
//   if (await page.$(cookieBtn) !== null) {
//     await page.click(cookieBtn);
//   }
//   if (await page.$(cookieBtn2) !== null) {
//     await page.click(cookieBtn2);
//   }
// }

/**
 * is product available
 * @param page
 */
async function isAvailable(page: Page): Promise<boolean> {
  return await page.$('#add-to-cart-button') !== null;
}

/**
 * Start point
 * @param pageData
 * @param browser
 */
export default async function run(pageDto: PageDto, browser: Browser) {
  return await Promise.all(
    pageDto.urls.map(async (url: string) => {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0' });

      // const title = await page.evaluate(() => document.title);
      // logger.info(`Page title: ${title}`);

      // close cookie popup
      // await handleCookie(page);

      // cart button exist
      const available = await isAvailable(page);
      const result = {
        isAvailable: available,
        page: url,
      };

      return result;
    }),
  );
}
