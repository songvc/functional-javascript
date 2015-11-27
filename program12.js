function spy(target, method){
	var spy = {count:0};

	var oldFunc = target[method];

	target[method] = function(){
		spy.count++;
		return oldFunc.apply(target,arguments);
	}
	

	return spy;
}

module.exports = spy;