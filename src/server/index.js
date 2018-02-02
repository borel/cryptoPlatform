const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cluster = require('cluster');
const os = require('os');

const health = require('./routes/healthRoute');
const crypto = require('./routes/cryptoRoute');
const binance = require('./routes/binanceRoute');
const poloniex = require('./routes/poloniexRoute');

if(cluster.isMaster) {

  var numWorkers = os.cpus().length;
  console.log('Master cluster setting up ' + numWorkers + ' workers...');

  for(var i = 0; i < numWorkers; i++) {
      cluster.fork();
  }

  cluster.on('online', function(worker) {
      console.log('Worker ' + worker.process.pid + ' is online');
  });

  cluster.on('exit', function(worker, code, signal) {
      console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
      console.log('Starting a new worker');
      cluster.fork();
  });
} else {
  
  // Koa server
  const app = new Koa();
  const PORT = process.env.PORT || 8090;

  // Body parser
  app.use(bodyParser());

  // Add route
  app.use(health.routes());
  app.use(crypto.routes());
  app.use(binance.routes());
  app.use(poloniex.routes());

  // Listen to server
  const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
    console.log('Process ' + process.pid + ' is listening to all incoming requests');
  });
}



