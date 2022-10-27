var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  if (req.headers.host == "wapiku.katelu.my.id") {
    proxy.web(req, res, { target: 'http://localhost:3001' });
  }
});

server.listen(80);