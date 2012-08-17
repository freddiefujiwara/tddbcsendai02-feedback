// commen
var VendingMachine  = function(){
	this.total = 0;
};
VendingMachine.prototype.insert = function(coin){
	this.total += coin;
};
VendingMachine.prototype.refund = function(){
	var change = this.total;
	this.total = 0;
	return change;
};
module.exports = VendingMachine;
