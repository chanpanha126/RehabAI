const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  console.log("Navigating...");
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });
  console.log("Page loaded. Clicking start...");
  
  try {
      await page.click('#btn-start');
      await wait(500);
      
      console.log("Clicking exercise...");
      await page.evaluate(() => {
          document.querySelector('.exercise-card').click();
      });
      
      await wait(500);
      
      console.log("Clicking start game...");
      await page.click('#btn-start-game');
      
      console.log("Waiting for game to initialize...");
      await wait(5000);
  } catch(e) {
      console.log("Error interacting with page:", e);
  }
  
  await browser.close();
})();
