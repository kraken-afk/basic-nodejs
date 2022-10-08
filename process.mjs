import process from "process";

process.addListener("exit", (exitNumber) => console.log(`NodeJS Exit with code number: ${exitNumber}`));

console.info(process.version);
console.table(process.env);
console.table(process.argv);
console.table(process.report);
console.table(process.cwd());

process.exit(121);

console.log("unreacheble code");