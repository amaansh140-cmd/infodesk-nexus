const puppeteer = require("puppeteer-core");
const os = require('os');
const path = require('path');

const executablePath = os.platform() === 'darwin' 
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : undefined;

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    executablePath 
  });
  const page = await browser.newPage();
  
  page.on('requestfailed', request => {
    console.log(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
  });

  page.on('response', response => {
    if (!response.ok()) {
      console.log(`BAD RESPONSE: ${response.url()} - ${response.status()}`);
    }
  });

  await page.goto("https://infodeskcomputers.com/", { waitUntil: "networkidle0" });
  await browser.close();
})();
