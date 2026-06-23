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
  
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.log("CONSOLE ERROR:", msg.text());
    } else {
      console.log("CONSOLE LOG:", msg.text());
    }
  });

  page.on("pageerror", (err) => {
    console.log("PAGE ERROR:", err.toString());
  });

  await page.goto("http://localhost:3001/", { waitUntil: "networkidle0" });
  await browser.close();
})();
