(function(global) {

	var Todo = function(owner) {
		this.owner = owner || 'Unknown';
	};

	// Ex. 1
	// Todo.prototype.getOwner = function() {
	// 	return this.owner;
	// };

	//Ex. 2
	// Todo.prototype.setOwner = function(owner) {
	// 	this.owner = owner;
	// }


	global.Todo = Todo;
	
}(this));