var expect = require("chai").expect;
var helloApp = require('../scripts/sayhello.js');

describe('Mocha test for hello app', function() {
	it('should pass the test', function() {
		expect(helloApp).to.have.property('getMsg');
		expect(helloApp.getMsg('John Doe')).to.equal('Hello John Doe, thanks for attending the Unconference 2016');
	});
});