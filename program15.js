function loadUsers(userIds, load, done) {

	var id = userIds.shift(); 
	
	if(typeof id == "undefined") return
	
	load(id, function(result){
		done(id);
	})

	loadUsers(userIds,load,done);
}



module.exports = loadUsers