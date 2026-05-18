const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Lab Working Successfully 🚀");
});

server.listen(process.env.PORT || 3000);
