function samplePromise() {
  return new Promise((resolve, reject) => {
    const n = Math.round(Math.random());
    
    if (n) return resolve("OK");
    else return reject("NOT OK");
  })
}

const str = await samplePromise();
console.log(str);

/**
 * by default javascript module has global async scope
 */