import net from "net";

const client = net.createConnection({  port: 3000, host: "localhost" })

client.addListener('data', (data) => console.log(`Receive data from server: ${data.toString()}`));

client.write("Romeo");
