const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from Nimbus!\n");
}).listen(3000);
console.log("listening on 3000");