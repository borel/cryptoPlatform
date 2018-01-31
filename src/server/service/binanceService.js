const axios = require("axios");
const queryString = require('query-string');
const baseURL = "https://api.binance.com/api/v3/ticker/price?";
const platform = "binance";

module.exports = {
  getCrypto: params => getCrypto(params),
}

const getCrypto = async (params) => {
  try {
    let url = baseURL + queryString.stringify(params);
    let response = await axios.get(url);
    response.data.platform = 'BINANCE';
    return response.data;
    
  } catch (error) {
    return error;
  }
};


