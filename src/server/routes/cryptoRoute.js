const Router = require('koa-router');
const router = new Router();
const cryptoService = require('./../service/cryptoService');
const BASE_URL = `/api/v1`;

router.get(BASE_URL+"/crypto", async (ctx) => {
  try {
    ctx.body = await cryptoService.getCrypto(ctx.request.query)
  } catch (err) {
    ctx.body = {
      status: 'error',
      data: err
    };
  }
})

module.exports = router;
