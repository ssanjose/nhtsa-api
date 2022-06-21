import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('Miscellaneous v2', () => {
    describe('ping server /api/v1/ping2', () => {
        it('should return a 200 response v2', (done) => {
            chai.request(server)
                .get('/api/alive')
                .end((err: Error, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
