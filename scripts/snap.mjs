import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const chromePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const outputDir = path.resolve("./public/screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1440px Desktop Screenshot
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
    // Wait for animations and web fonts to complete render
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({
      path: path.join(outputDir, "fullpage-desktop-1440.png"),
      fullPage: true,
    });
    await page.close();
  }

  // 375px Mobile Screenshot
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 1200));
    await page.screenshot({
      path: path.join(outputDir, "fullpage-mobile-375.png"),
      fullPage: true,
    });
    await page.close();
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

capture().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
