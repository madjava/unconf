var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

/**
 * Example 1. Testing our Object Under Test
 */
describe('Test that the Todo script exists', function() {
	var todo;
	before(function() {
		todo = new Todo();
	});

	//1. Using expect matcher
	it('Should have the object existing - expect', function() {
		expect(todo).to.be.an('object');
	});

	//2. Using assertion matcher
	it('Should have the object existing - assert', function() {
		assert.typeOf(todo, 'object', 'should be a valid Todo object');
	});

	//3. Using should matcher
	it('Should have the object existing - should', function() {
		todo.should.be.a('object');
	});
});
 

/**
 * Example 2. Test our Objects core public API, ensuring its consistency
 */
describe('Test that relevant API exist and behaves as expected', function() {
	var todo;
	before(function() {
		todo = new Todo();
	});

	it('should have to owner property existing', function() {
		expect(todo).to.have.property('owner').and.to.equal('Unknown');
	});

	//** Ex. 1a - Uncomment block, test should fail. Make test pass 
	// it('should have its accessor methods in existence', function(){
	// todo.should.have.property('getOwner');
	// });

	//** Ex. 1b - Uncomment block, test should fail. Make test pass 
	// it('should have the owner property correctly when object is created', function(){
	//    todo = new Todo('John Doe');
	//    expect(todo.getOwner()).to.equal('John Doe');
	// });
    
    //** Ex. 2 - Uncomment block, test should fail. Make test pass 
	// it('should have the owner property correctly', function(){
	//    todo = new Todo('John Doe');
	//    todo.setOwner('Jane Doe');
	//    expect(todo.getOwner()).to.equal('Jane Doe');
	// });
});

/**
 * Requirement: When i ask for a day in the week using a number 1 to 7
 * i expect to get the corresponding day of the week name e.g. 2 should give me Tuesday
 */

 /**
  * Requirement: I want to be able to sort a list of todos for one week and view them by passing in a number
  * for the day i want to see all the todos for that day
  */