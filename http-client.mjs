import https from 'https';

const endpoint = "hookkbin"; // check website hookbin
const request = https.request(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}, (response) => {
  response.addListener("data", (data) => {
    console.info(`Data received: ${data.toString()}`);
  })
});

const body = JSON.stringify({
  firstName: "Romeo",
  lastName: "Noveanre",
});

request.write(body);
request.end();

