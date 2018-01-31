process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../../src/server/index');

describe('routes : binance', () => {
  describe('GET /api/v1/binance/crypto', (params) => {
    it('should return json', () => {
      chai.request(server)
      .get('/api/v1/binance/crypto')
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.equal('success');
        res.body.message.should.eql('hello, world!');
        done();
      });
    });
  });

});
