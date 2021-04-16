const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req.url, req.headers, req.method);
  res.setHeader("Content-Type","text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From My Node JS Server !</h1></body>");
  res.write("</html>");
  res.end();

  //process.exit();
});

server.listen(3001);