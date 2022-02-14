import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';

const should = chai.should();
chai.use(chaiHttp);

describe('VIN Test', () => {
    describe('Get single model', () => {
        it('given a VIN', (done) => {
            // Sample vin
            const VIN = '1HGCP3F82CA009869';
            // Actual model from vin
            const details: string[][] = [
                ['modelYear', '2012'],
                ['make', 'HONDA'],
                ['model', 'Accord']]

            chai.request(server)
                .get(`/api/v1/model?vin=${VIN}`)
                .end((err: Error, res) => {
                    res.should.have.status(200);

                    let pass: boolean = true;
                    let key: string;
                    let value: string;

                    // Loop through each detail and check if it is in the response body.
                    for (let i = 0; i < details.length; i++) {
                        key = details[i][0];
                        value = details[i][1];
                        if (res.body["model"][key] !== value) {
                            pass = false;
                            break;
                        }
                    }

                    pass.should.be.true;
                    done();
                });
        });
    });
});