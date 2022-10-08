function samplePromise() {
  return Promise.resolve("Hello World");
}

async function run() {
  console.log(
    await samplePromise()
  );
}

run();