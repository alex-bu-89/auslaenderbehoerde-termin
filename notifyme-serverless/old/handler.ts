import { Handler } from 'aws-lambda';
import 'source-map-support/register';
// import Scraper from './scraper/';

export const notify: Handler = async (event, _context) => {

  // Scraper.register([
  //   'ps'
  // ]);
  console.log('------------>', 'test');
  return {
    statusCode: 200,
    body: 'scraper'
  }
  // const { url } = event.queryStringParameters;
  // const url = 'https://formular.berlin.de/xima-forms-29/get/14963116144270000?mandantid=/OTVBerlin_LABO_XIMA/000-01/instantiationTasks.properties';
  // const chrome = await getChrome();

  // const browser = await puppeteer.connect({
  //   browserWSEndpoint: chrome.endpoint,
  // });

  // const page = await browser.newPage();
  // await page.goto(url, { waitUntil: 'networkidle0' });
  // // const content = await page.evaluate(() => document.body.innerHTML);
  // const rawScreenshot = await page.screenshot({});
  // await browser.close();

  // return {
  //   statusCode: 200,
  //   isBase64Encoded: true,
  //   body: rawScreenshot.toString('base64'),
  //   headers: {
  //     'Content-Type': 'image/png',
  //   }
  // };
}
