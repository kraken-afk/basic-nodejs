import util from 'util';

console.info(util.format("Name: %s", "romeo"));

const person = {name: "Romeo", age: 17};

console.info(util.format("Person: %j", person));