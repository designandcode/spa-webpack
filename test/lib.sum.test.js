const chai = require('chai');
const expect = chai.expect;

import sum from '../src/lib/sum/';

describe("lib/sum", () => {

  context("when both are valid numbers", () => {
		
    it("returns the sum of them", () => {
      expect(sum(1, 2)).to.equal(3);
    });
  });
});

