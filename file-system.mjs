import fs from "fs";

const buffer = fs.readFileSync("./file-system.mjs");

console.log(buffer.toString());

fs.writeFileSync("./temp.txt", "Hello NodeJs");
fs.readFile("./temp.txt", "utf-8", (_err, _buffer) => {
  console.log(_buffer.toString());
  fs.rmSync("./temp.txt");
})
