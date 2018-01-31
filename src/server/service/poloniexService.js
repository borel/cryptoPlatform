const axios = require("axios");
const queryString = require('query-string');
const baseURL = "https://poloniex.com/public?command=returnTicker";
const platform = "binance";

module.exports = {
  getCrypto: symbol => getCrypto(symbol),
}
const getCrypto = async (symbolJson) => {
  try {
    let symbol = symbolJson.symbol;
    // Get data from API
    let apiResponse = await axios.get(baseURL);
    
    // Build poloniex symbol
    let poloniexSymbol = symbol.slice(3)+ "_" + symbol.slice(0, 3)
    let crypto = {};
    if(!apiResponse.data[""+poloniexSymbol+""]){  
      crypto.symbol = symbol;
      crypto.platform = 'POLONIEX';
    }else{
      crypto.symbol = symbol;
      crypto.price = apiResponse.data[""+poloniexSymbol+""].last;
      crypto.platform = 'POLONIEX';
    }
    return crypto;  

  } catch (error) {
    return error;
  }
};


