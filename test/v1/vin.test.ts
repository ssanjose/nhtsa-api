import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('VIN Test', () => {
    describe('Get single model', () => {
        it('given a VIN', (done) => {
            const VIN = '3N1AB6AP7BL729215';
            const details: string[][] = [['Model_Year', '2011'], ['Make_Name', 'Nissan'], ['Model_Name', 'Sentra']]

            chai.request(server)
                .get(`/api/v1/model?VIN=${VIN}`)
                .end((err: Error, res) => {
                    res.should.have.status(200);

                    let pass: boolean = true;
                    // Loop through each detail and check if it is in the response body.
                    for (const detail of details) {
                        const key = detail[0];
                        const value = detail[1];
                        if (res.body[key] !== value) {
                            pass = false;
                            break;
                        }
                    }

                    console.log(res.body);
                    pass.should.be.true;
                    done();
                });
        });
    });
});