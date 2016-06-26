(function(global) {

	var Todo = function(owner) {
		this.owner = owner || 'Unknown';
		// this.days = [];
	};


	Todo.prototype.getOwner = function() {
		return this.owner;
	};
 
	Todo.prototype.setOwner = function(owner) {
		this.owner = owner;
	}

   
	Todo.prototype.fetchDays = function() {
		var _self = this;
		$.ajax({
			url: '/data/days.json',
			dataType: 'json',
			success: function(data) {
				_self.setDays(data);
			}
		});
	};

	Todo.prototype.setDays = function(data) {
		this.days = data.days;
	};

	Todo.prototype.getDays = function(data) {
		return this.days;
	};


	global.Todo = Todo;

}(this));