import { Console } from 'console';
import fs from 'fs';

const fileStream = fs.createWriteStream("./application.log");
const log = new Console({ stdout: fileStream, stderr: fileStream });

log.info("Hello, World!");
log.error("Error");

const person = {name: "Romeo Noveanre", age: 17};

log.table(person);