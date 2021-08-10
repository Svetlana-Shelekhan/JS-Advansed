//Make a Person

/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and
it has to be a string. These methods must be the only available means
of interacting with the object.
*/




var Person = function(firstAndLast){
	this.getFullName = function(){
		return firstAndLast;
	};
	this.getFirstName = function(){
		return firstAndLast.split(" ")[0];
	};
	this.getLastName = function(){
		return firstAndLast.split(" ")[1];
	};
	this. setFullName = function(newFullName){
		return firstAndLast = newFullName;
	};
	this.setFirstName = function(newFirstName){
		return firstAndLast = newFirstName + " " + this.getLastName();
	};
	this.setLastName = function(newLastName){
		return firstAndLast = this.getFirstName() + " " + newLastName;
	};
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length); //6
console.log(bob instanceof Person);  //true
console.log(bob.firstName);  //undefined
console.log(bob.lastName); //undefined
console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
console.log(bob.getFullName()); //Bob Ross
bob.setFirstName("Haskell");
console.log(bob.getFullName()); //Haskell Ross
bob.setLastName("Curry");
console.log(bob.getFullName()); // Haskell Curry
console.log(bob.getFirstName()); //Haskell
console.log(bob.getLastName()); //Curry