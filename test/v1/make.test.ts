import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('Make Test', () => {
    describe('Get all makes', () => {
        it('should return a 200 response and list of makes', (done) => {
            chai.request(server)
                .get('/api/v1/make')
                .end((err: Error, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});