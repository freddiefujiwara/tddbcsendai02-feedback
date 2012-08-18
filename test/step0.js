if("undefined" !== typeof require){
	var VendingMachine = require("../VendingMachine.js");
	var expect = require("expect.js");
}
describe('Vending Machine Step0', function() {
	var vm;
	beforeEach(function(){
		vm = new VendingMachine();
		vm.insert(10);
		vm.insert(50);
		vm.insert(100);
		vm.insert(500);
		vm.insert(1000);
	});

	describe('insert 10, 50, 100, 500 and 1000', function() {
		it('total is 1660', function() {
			expect(vm.total).to.equal(1660);
		});
	});

	describe('insert 10, 50, 100, 500 and 1000 then refund', function() {
		it('total is 0', function() {
			var change = vm.refund();
			expect(vm.total).to.equal(0);
			expect(change).to.equal(1660);
		});
	});
});
