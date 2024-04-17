const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello World</p>");
  res.write("<p>Hello again World</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("site is up and running at http://localhost:3000");
});
