import process from 'process';
import rl from 'readline';

const input = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
})

input.question('What is your name? ', (name) => {
  console.log(`Hello ${name}`);
  input.close();
})