import 'mocha';
import chai from 'chai';
import chaiHttp = require('chai-http');
import {app} from '../../src/app';
import { doesNotMatch } from 'assert';
chai.use(chaiHttp);

var assert = chai.assert;

describe("Server Test", () => {
    it('Get', (done) => {
        chai.request(app).get('/')
        .then((res:any) => {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'Hello World!');
            done();
        });
    });
});
