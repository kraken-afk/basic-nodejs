import path from "path";

const file = "Users\\Romeo\\example.txt";

console.log(path.sep, 'sep');
console.log(path.basename(file), 'basename');
console.log(path.dirname(file), 'dirname');
console.log(path.extname(file), 'extname');
console.log(path.resolve(path.dirname("./"), "path.mjs"));

