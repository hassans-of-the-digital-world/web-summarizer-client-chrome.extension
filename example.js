const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=421&aid=0004084373');
  //await page.goto('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=102&oid=022&aid=0003379545');
  await page.goto('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=100&oid=025&aid=0002921390');

  const title = await page.evaluate(() => 
	document.querySelector('#articleTitle').innerText)
  const content = await page.evaluate(() => 
	document.querySelector('#articleBodyContents').innerText)

  console.log("제목 : " + title + "\n\n");
  console.log("내용 : \n" + content + "\n\n");

  await browser.close();
})();