function checkUsersValid(goodUsers){

	return function(testUsers){
		return testUsers.every(function(element){
			return goodUsers.some(function(element2){
				return element.id == element2.id;
			})
		})
	}
}

module.exports = checkUsersValid;