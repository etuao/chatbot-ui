const next = require('next');
const express = require('express');
const proxy = require('express-http-proxy');

const API_URL = 'https://ai.etuao.com/api';
const PORT = 3000;
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    '/api',
    proxy(API_URL, {
      limit: '100mb',
      proxyReqPathResolver: function (req) {
        // console.log('req.url :>> ', req.url, req.path, req.originalUrl);
        const url = API_URL + req.url;
        console.log('url :>> ', url);
        return url;
      },
    }),
  );
  // 其它路由
  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(PORT);
  console.log(`> Ready on  http://127.0.0.1:${PORT}`); // eslint-disable-line no-console
});
