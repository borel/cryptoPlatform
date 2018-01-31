const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const health = require('./routes/healthRoute');
const crypto = require('./routes/cryptoRoute');
const binance = require('./routes/binanceRoute');
const poloniex = require('./routes/poloniexRoute');

// Koa server
const app = new Koa();
const PORT = process.env.PORT || 1337;

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
});

module.exports = server;
