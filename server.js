const _ = require("lodash");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20);
  console.log(num);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send a html file
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      //only one write can be written directly in res.end
      //   res.write(data);

      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("site is up and running at http://localhost:3000");
});
