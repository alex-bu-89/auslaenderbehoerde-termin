import path from 'path';
import puppeteer from 'puppeteer';
import logger from '../utils/logger';
import { getChrome } from '../utils/chrome';

// @TODO fix missing files with dynamic imports
import './ps';

export enum Scrapers {
  PS = 'ps',
}

export async function register(scrapers: string[]) {
  const chrome = await getChrome();
  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint,
  });

  return Promise.all(scrapers.map(async (scraper) => {
    const module = await import(path.resolve(__dirname, scraper));
    return await module.default(browser);
  }))
  .then(async (result) => {
    await browser.close();
    return result;
  })
  .catch((error) => {
    logger.error('Error has occurred while register scrapers', error);
  });
}

export default {
  register,
};