const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const START_URL = process.env.SITE_URL || "";
const ACCOUNT = process.env.SITE_ACCOUNT || "";
const PASSWORD = process.env.SITE_PASSWORD || "";
const OUTPUT_DIR = process.env.SHOT_DIR || process.cwd();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function login(page) {
  if (!START_URL) {
    throw new Error("SITE_URL is required");
  }
  await page.goto(START_URL, { waitUntil: "networkidle2" });

  // Adjust selectors per target system.
  const inputs = await page.$$("input");
  if (inputs.length >= 2 && ACCOUNT && PASSWORD) {
    await inputs[0].type(ACCOUNT, { delay: 20 });
    await inputs[1].type(PASSWORD, { delay: 20 });
  }

  // Replace with site-specific submit logic when needed.
  const buttons = await page.$$("button");
  if (buttons.length) {
    await buttons[0].click();
  }
  await sleep(5000);
}

async function clickSmallestText(context, text) {
  return await context.evaluate((targetText) => {
    const clean = (value) => String(value || "").replace(/\s+/g, "").trim();
    const visible = (el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    };

    const wanted = clean(targetText);
    const candidates = Array.from(
      document.querySelectorAll("button,.el-button,a,[role='button'],span,div,li,label")
    )
      .filter((el) => visible(el) && clean(el.innerText).includes(wanted))
      .map((el) => ({
        el,
        area: el.getBoundingClientRect().width * el.getBoundingClientRect().height,
      }))
      .sort((a, b) => a.area - b.area);

    const hit = candidates[0] && candidates[0].el;
    if (!hit) return null;
    hit.click();
    return {
      tag: hit.tagName,
      className: hit.className,
      text: clean(hit.innerText),
    };
  }, text);
}

async function captureVisibleDialog(context, outputPath) {
  const selectors = [
    ".el-dialog",
    ".el-message-box",
    ".el-drawer",
    ".el-dialog__wrapper",
    ".el-message-box__wrapper",
  ];

  for (const selector of selectors) {
    const handles = await context.$$(selector);
    for (const handle of handles) {
      const box = await handle.boundingBox();
      if (box && box.width > 100 && box.height > 80) {
        await handle.screenshot({ path: outputPath });
        return true;
      }
    }
  }
  return false;
}

async function main() {
  ensureDir(OUTPUT_DIR);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--no-sandbox"],
    defaultViewport: { width: 1600, height: 1000 },
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(30000);

  await login(page);

  // Replace this section with site-specific route walking logic.
  // The intended workflow is:
  // 1. navigate to a route
  // 2. capture base page
  // 3. click button(s)
  // 4. capture resulting page or dialog
  await page.screenshot({ path: path.join(OUTPUT_DIR, "page_home.png"), fullPage: false });

  // Example hook:
  // await clickSmallestText(page, "新增");
  // await sleep(2000);
  // await captureVisibleDialog(page, path.join(OUTPUT_DIR, "popup_add.png"));

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
