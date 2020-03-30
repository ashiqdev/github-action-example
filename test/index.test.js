const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const numbers = [1, 2, 3, 4, 5];

const { puppeteerConfig, url } = require("./config.json");

const { browserOpts, pageOpts, viewport } = puppeteerConfig;

// multiply array items by 2
const multiplyBy2 = numbers => numbers.map(number => number * 2);
const result = multiplyBy2(numbers);

describe("simple test", () => {
  let page;

  before(async () => {
    global.browser = await puppeteer.launch(browserOpts);
    page = await browser.newPage();
    await page.setViewport(viewport);
  });

  it("should go to example.com", async () => {
    await page.goto(url, pageOpts);
    const pageUrl = await page.url();
    expect(pageUrl).to.equals(url);
  });

  it("should scrape the correct header", async () => {
    const header = await page.$eval("div h1", header => header.innerText);
    expect(header).to.equal("Example Domain");
  });

  it("should be an array", () => {
    expect(numbers)
      .to.be.an("array")
      .that.includes(2);
  });

  it("should multiply array items by 2", () => {
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });

  after(async () => {
    await browser.close();
  });
});
