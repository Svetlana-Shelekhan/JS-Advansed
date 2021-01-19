

/*3.Сценарии промежуточного алгоритма: Найти и уничтожить
Вам будет предоставлен начальный массив (первый аргумент в функции 
разрушителя), за которым следуют один или несколько аргументов. 
Удалите из исходного массива все элементы, которые имеют то же значение,
 что и эти аргументы.

Запись
Вы должны использовать аргумент(arguments) object.*/

/*Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the 
destroyer function), followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.*/




function destroyer(arr) {
	var newArray = [];
var arrayArguments = [];

	 for (var k = 1; k < arguments.length; k++)
    arrayArguments.push(arguments[k]);

for(var i = 0; i < arr.length; i += 1){
var arr1 = arr[i];
if(arrayArguments.indexOf(arr1) === -1){
newArray.push(arr1);
}
 
}
return newArray ;
}



console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // return [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //return [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //return [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); //return []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //return ["hamburger"]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); //return [12,92,65]





