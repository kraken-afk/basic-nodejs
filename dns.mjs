import dns from "dns/promises";

const address = await dns.lookup("localhost");
console.log(address);