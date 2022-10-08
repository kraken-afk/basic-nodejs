import cluster from "cluster";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
}

if (cluster.isWorker) {
  console.log(`Worker ${process.pid}`);
  process.exit();
}