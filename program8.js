function duckCount(){
	var args = Array.prototype.slice.call(arguments);

	return args.filter(function(argument){
		return Object.prototype.hasOwnProperty.call(argument, 'quack');
	}).length;
}

module.exports = duckCount;