import net from 'net';

const server = net.createServer((client) => {
  console.info("Client connected");

  client.addListener('data', (buffer) => {
    console.info(buffer.toString());
    client.write(`Hello ${buffer.toString()}\r\n`)
  })
})

server.listen(3000, "localhost");