import fs from 'fs';

const stream = fs.createWriteStream("./text.log");

stream.write("Romeo ");
stream.write("Noveanre");
stream.end();

const reader = fs.createReadStream("./text.log");

reader.setEncoding('utf8');
reader.on("data", data => {
  console.log(data.toString(), "end");
})
