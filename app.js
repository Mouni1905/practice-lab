const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Lab Working 🚀");
});

server.listen(process.env.PORT || 3000);
