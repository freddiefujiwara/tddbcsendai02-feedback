if("undefined" !== typeof require){
	var libpath = process.env['EXAMPLE_COV'] ? '../lib-cov/' : '../lib/';
	var VendingMachine = require(libpath+"VendingMachine.js");
	var expect = require("expect.js");
}
describe('Vending Machine Step1', function() {
	var vm;
	beforeEach(function(){
		vm = new VendingMachine();
		vm.insert(10);
		vm.insert(50);
		vm.insert(100);
		vm.insert(500);
		vm.insert(1000);
	});

	describe('insert 1, 5, 5000 and 10000 then rejected', function() {
		it('total is 1660', function() {
            var change = vm.insert(1);
			expect(change).to.equal(1);

			change = vm.insert(5);
			expect(change).to.equal(5);

			change = vm.insert(5000);
			expect(change).to.equal(5000);

			change = vm.insert(10000);
			expect(change).to.equal(10000);

			expect(vm.total).to.equal(1660);
		});
	});
});
