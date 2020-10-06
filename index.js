const http = require("http");
const port = process.env.port || 3000;
const url = require("url");

const server = http.createServer((request, response) => {
  let bodyObject = "";
  request.on("data", chunk => {
    bodyObject += decoder.write(chunk);
  });
  request.on("end", () => {
    bodyObject += decoder.end();
    reqObject = {
      urlMethod: request.method.toLowerCase(),
      parsedUrl: url.parse(request.url).pathname.replace(/^\/+|\/+$/g, ""),
      queryObject: url.parse(request.url, true).query,
      bodyObject: bodyObject ? JSON.parse(bodyObject) : {}
    };

    response.end(JSON.stringify(reqObject));
  });
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
