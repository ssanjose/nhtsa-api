import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('Miscellaneous', () => {
    describe('ping server /api/v1/ping', () => {
        it('should return a 200 response', (done) => {
            chai.request(server)
                .get('/api/v1/ping')
                .end((err: Error, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
