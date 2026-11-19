const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from Nimbus v2!\n");
}).listen(3000);
console.log("listening on 3000");