const Router = require('koa-router');
const router = new Router();
const binanceService = require('./../service/binanceService');
const BASE_URL = `/api/v1/binance`;

router.get(BASE_URL+"/crypto", async (ctx) => {
  try {
    ctx.body = await binanceService.getCrypto(ctx.request.query)
  } catch (err) {
    ctx.body = {
      status: 'error',
      data: err
    };
  }
})

module.exports = router;
