var assert = require('assert');
var VendingMachine = require('../VendingMachine');
var vm = new VendingMachine();

describe('insert and refund', function() {
	it('total is 0', function() {
		assert.equal(vm.total, 0);
	});
});
