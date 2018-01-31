const Router = require('koa-router');
const router = new Router();
const poloniexService = require('./../service/poloniexService');
const BASE_URL = `/api/v1/poloniex`;

router.get(BASE_URL+"/crypto", async (ctx) => {
  try {
    ctx.body = await poloniexService.getCrypto(ctx.request.query)
  } catch (err) {
    ctx.body = {
      status: 'error',
      data: err
    };
  }
})

module.exports = router;
