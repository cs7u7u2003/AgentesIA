const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('http');

const { createServer, safePath, SRC_DIR } = require('../server');

function request(server, pathname) {
  return new Promise((resolve, reject) => {
    const address = server.address();
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: address.port,
        path: pathname,
        method: 'GET'
      },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, headers: res.headers, body });
        });
      }
    );

    req.on('error', reject);
    req.end();
  });
}

test('safePath resuelve index y bloquea traversal', () => {
  assert.equal(safePath('/').endsWith('src\\index.html') || safePath('/').endsWith('src/index.html'), true);
  assert.equal(safePath('/../server.js'), null);
  assert.ok(safePath('/styles.css').startsWith(SRC_DIR));
});

test('servidor responde index, 404 y traversal bloqueado', async (t) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  t.after(() => server.close());

  const home = await request(server, '/');
  assert.equal(home.statusCode, 200);
  assert.match(home.headers['content-type'], /text\/html/);
  assert.match(home.body, /ContentAgentApp v3/);

  const missing = await request(server, '/missing-file');
  assert.equal(missing.statusCode, 404);
  assert.equal(missing.body, 'Not found');

  const forbidden = await request(server, '/../server.js');
  assert.equal(forbidden.statusCode, 403);
  assert.equal(forbidden.body, 'Forbidden');
});
