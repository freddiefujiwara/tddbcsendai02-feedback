// commen
var VendingMachine  = function(){
	this.total = 0;
};
VendingMachine.prototype.insert = function(coin){
    if(coin == 1 || coin == 5 || coin == 5000 || coin == 10000) {
        return coin;
    }
	this.total += coin;
};
VendingMachine.prototype.refund = function(){
	var change = this.total;
	this.total = 0;
	return change;
};
	module.exports = VendingMachine;
