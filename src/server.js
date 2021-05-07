/* eslint-disable promise/catch-or-return */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { join } = require('path');

const port = 3333;
const dev = process.env.NODE_ENV !== 'production';
const opts = {
  dev,
  dir: './src',
};
const app = next(opts);
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml'];

    if (rootStaticFiles.indexOf(pathname) > -1) {
      const path = join(__dirname, 'static', pathname);
      app.serveStatic(req, res, path);
    } else handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
