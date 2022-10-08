import { threadId, parentPort } from "worker_threads";

parentPort.on("message", msg => 
{
  for (let i = 0; i < msg; i++)
  {
    console.info(`Thread id: ${threadId} | Data Received from parentPort: ${msg}`);
    parentPort.postMessage(msg + 10);
  }
  parentPort.close();
})