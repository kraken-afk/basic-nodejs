import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("greet", (name) => console.log(`Hello, ${name}!`));
emitter.on("bye", (name) => console.log(`Good bye, ${name}.`));

emitter.emit("greet", "Romeo");
emitter.emit("bye", "Romeo");