
/* 3.Создание базовых алгоритмов: факторизация числа
Верните факториал предоставленного целого числа.
Если целое число представлено буквой n, факториал - это произведение всех 
положительных целых чисел, меньших или равных n.
Факториалы часто обозначаются сокращенным обозначением n!
Например: 5! = 1 * 2 * 3 * 4 * 5 = 120
В функцию будут переданы только целые числа больше или равные нулю.*/


/*Basic Algorithm Scripting: Factorialize a Number
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less 
than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.*/


/*
function factorialize(num) {
 var z = 1;
  for(var i = 1; i <= num; i = i+1){
    z = z * i;
  }
  return z;
}

//factorialize(5);     //120
console.log(factorialize(10));     //3628800
//factorialize(20);     //2432902008176640000
//factorialize(0);      //1
*/

/*
//2.метод рекурсии
function factorial(n){
	if(n === 0){
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(factorial(10));
*/

//3.минимизации

var memoize = function (callback){
	var memo = {};
	return function(args){
		if(memo[args]){
			return memo[args];
		}else{
			memo[args]= callback(args);
			return memo[args];
		}
	}
}

function factorial(n){
	if(n === 0){
		return 1;
	}
	return n * factorial(n - 1);
}

var m = memoize(factorial);
console.log(m(10));