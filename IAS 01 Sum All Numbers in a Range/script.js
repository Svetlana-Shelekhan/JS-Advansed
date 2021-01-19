

/*1. Сценарии промежуточного алгоритма: суммирование всех чисел в диапазоне
Мы передадим вам массив из двух чисел. Возвратите сумму этих двух чисел плюс
 сумму всех чисел между ними. Самое низкое число не всегда будет первым.
 Например, sumAll ([4,1]) должно возвращать 10, потому что сумма всех 
 чисел от 1 до 4 (оба включительно) равна 10.*/

/*Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them. The lowest number 
will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all 
the numbers between 1 and 4 (both inclusive) is 10.*/



function sumAll(arr) {
 var min = Math.min(arr[0], arr[1]);
 var max = Math.max(arr[0], arr[1]);
var i, sum = 0, newArray = [];
 for(i = min; i <= max; i += 1){
 sum += i;
 }
	return sum;
}

console.log(sumAll([1, 4]));  //10
console.log(sumAll([4, 1]));  //10
console.log(sumAll([5, 10]));   //45
console.log(sumAll([10, 5]));   //45
   


