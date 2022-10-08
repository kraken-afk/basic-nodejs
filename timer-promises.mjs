import timers from 'timers/promises';
const { setTimeout } = timers;

setTimeout(1000, "romeo")
.then(name => console.log(name));

console.log("hello");