import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('Model Test', () => {
    describe('Get all models', () => {
        it('given a make and year', (done) => {
            const make = 'Toyota';
            const year = '2019';

            chai.request(server)
                .get(`/api/v1/model?make=${make}&year=${year}`)
                .end((err: Error, res) => {
                    res.should.have.status(200);

                    // console.log(res.body);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});