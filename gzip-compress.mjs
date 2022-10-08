import fs from 'fs';
import { gzipSync, unzipSync } from 'zlib';

// const result = gzipSync(fs.readFileSync("./hello-world.js"));
// fs.writeFileSync("./hello-compress.mjs", result);

const unz = unzipSync(fs.readFileSync("./hello-compress.mjs"));

console.log(unz.toString());
