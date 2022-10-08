import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.headers);
  switch (request.url) {
    case "/romeo":
      response.write("Hello Romeo");
      break;
    case "/node":
      response.write("lagi belajar nodeJS");
      break;
    default: response.write("Hello World");
  }
})

server.addListener("listening", () => {
  console.info("Ready to connect");
})

server.listen(3000, "localhost");

/**
 *  ERROR SEMUA
 */