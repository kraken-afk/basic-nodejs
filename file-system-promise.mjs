import fs from "fs/promises";

fs.readFile("./file-system-promise.mjs")
  .then(buffer => console.log(buffer.toString()));

await fs.writeFile("./temp.txt", "Hello NodeJS");
fs.readFile("./temp.txt")
  .then(buffer => console.log(buffer.toString()))
  .then(() => fs.rm("./temp.txt"));
