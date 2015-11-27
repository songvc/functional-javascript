function getShortMessages(arr){
	return arr.filter(function(obj){
		return obj.message.length < 50
	}).map(function(obj){
		return obj.message;
	})
}

module.exports = getShortMessages;