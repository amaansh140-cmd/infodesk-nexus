const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  
  // Intercept and print console messages from the page
  page.on('console', msg => {
    console.log(`[Browser Console ${msg.type().toUpperCase()}] ${msg.text()}`);
  });
  
  // Intercept and print uncaught exceptions
  page.on('pageerror', err => {
    console.log(`[Browser PageError] ${err.toString()}`);
  });
  
  // Intercept request failures
  page.on('requestfailed', request => {
    console.log(`[Browser Request Failed] ${request.url()} - ${request.failure()?.errorText}`);
  });

  try {
    console.log("Navigating to http://localhost:3000 ...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log("Navigation complete. Waiting 2 seconds for any delayed hydration errors...");
    await new Promise(r => setTimeout(r, 2000));
  } catch (error) {
    console.error("Puppeteer Script Error:", error);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
