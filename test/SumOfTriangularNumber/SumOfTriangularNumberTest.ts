/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import {assert} from "chai";
import solution = require('../../app/SumOfTriangularNumber/SumOfTriangularNumber');

describe('sumTriangularNumbers', () => {
    describe("solution", function(){
        it("BasicTests", function(){
            assert.equal(solution.sumTriangularNumbers(6), 56);
            assert.equal(solution.sumTriangularNumbers(34), 7140);
            assert.equal(solution.sumTriangularNumbers(-291), 0);
            assert.equal(solution.sumTriangularNumbers(943), 140205240);
            assert.equal(solution.sumTriangularNumbers(-971), 0);
        });
    });
});