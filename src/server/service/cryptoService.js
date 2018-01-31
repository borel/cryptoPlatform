const binanceService = require('./binanceService');
const poloniexService = require('./poloniexService');

module.exports = {
  getCrypto: symbol => getCrypto(symbol),
}

const getCrypto = async (symbolJson) => {
  try {
    let crypto = [];
    let [ binanceElement, poloniexElement] = await Promise.all([ binanceService.getCrypto(symbolJson), poloniexService.getCrypto(symbolJson)]);
  
     crypto.push(binanceElement);
     crypto.push(poloniexElement);

    return crypto;
  } catch (err) {
    console.log(err);
    return err;
  }
}
