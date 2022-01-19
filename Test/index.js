const chai = require('chai');

const should = chai.should();

const chaiHtpp = require('chai-http');
chai.use(chaiHtpp);

const server = require('../app');

describe('Simple Rest API' , () => {
    it('should return json obejct containng two properties status and message' , (done) => {
        chai.request(server)
            .get('/')
            .end((err , res) => {
                if(err){
                    return "there is an Error"
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });
})