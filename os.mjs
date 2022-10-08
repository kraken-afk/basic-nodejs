import os from "os";

console.log(os.tmpdir());
console.log(os.type());
console.log(os.arch());
console.log(os.release());
console.log(os.homedir());
console.table(os.cpus());
console.table(os.networkInterfaces());
console.log(os.hostname());
console.log(os.EOL);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());