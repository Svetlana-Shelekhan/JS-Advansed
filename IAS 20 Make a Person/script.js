

/*4.Сценарии промежуточного алгоритма: Сделать человека
Заполните конструктор объекта следующими методами:


Запустите тесты, чтобы увидеть ожидаемый результат для каждого метода. 
Методы, принимающие аргумент, должны принимать только один аргумент, и 
это должна быть строка. Эти методы должны быть единственными доступными 
средствами взаимодействия с объектом.
 */


/*Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods 
that take an argument must accept only one argument and it has to be 
a string. These methods must be the only available means of interacting 
with the object.*/

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
bob.getFullName();


console.log(Object.keys(bob).length); // return 6.
console.log(bob instanceof Person); //return true.
console.log(bob.firstName); //return undefined.
console.log(bob.lastName); //return undefined.
console.log(bob.getFirstName()); //return "Bob".
console.log(bob.getLastName()); //return "Ross".
console.log(bob.getFullName()); //return "Bob Ross".
console.log(bob.getFullName()); //return "Haskell Ross" after bob.setFirstName("Haskell").
console.log(bob.getFullName()); //return "Haskell Curry" after bob.setLastName("Curry").
console.log(bob.getFullName()); //return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()); //return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()); //return "Curry" after bob.setFullName("Haskell Curry").