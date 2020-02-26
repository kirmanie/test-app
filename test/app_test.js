const chai = require(`chai`);
global.expect = chai.expect;

describe(`App`, () => {
    it(`someTest`, () => {
       expect(1).to.equal(1);
    })
});