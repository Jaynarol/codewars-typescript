/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
"use strict";
var chai_1 = require("chai");
var solution = require('../../app/SumOfTriangularNumber/SumOfTriangularNumber');
describe('sumTriangularNumbers', function () {
    describe("solution", function () {
        it("BasicTests", function () {
            chai_1.assert.equal(solution.sumTriangularNumbers(6), 56);
            chai_1.assert.equal(solution.sumTriangularNumbers(34), 7140);
            chai_1.assert.equal(solution.sumTriangularNumbers(-291), 0);
            chai_1.assert.equal(solution.sumTriangularNumbers(943), 140205240);
            chai_1.assert.equal(solution.sumTriangularNumbers(-971), 0);
        });
    });
});
