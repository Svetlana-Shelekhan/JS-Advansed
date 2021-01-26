

/*1.Сценарии промежуточного алгоритма:  Суммировать все нечетные числа Фибоначчи

Учитывая положительное целое число, вернуть сумму всех нечетных чисел Фибоначчи, 
которые меньше или равны числу.

Первые два числа в последовательности Фибоначчи - это 1 и 1. Каждое дополнительное
 число в последовательности - это сумма двух предыдущих чисел. Первые шесть чисел
  последовательности Фибоначчи - это 1, 1, 2, 3, 5 и 8.

Например, sumFibs (10) должен вернуть 10, потому что все нечетные числа 
Фибоначчи, меньшие или равные 10, равны 1, 1, 3 и 5.*/


/*Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci 
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two
 previous numbers. The first six numbers of the Fibonacci 
 sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd 
Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/



function sumFibs(num) {
 var start = 0;
 var next = 1;
 var current;
 var sumOdd = 0;
 var i;
 for (i = 0; i <= num; i += 1){
 current = start + next;
 start = next;
 next = current;

 if (current % 2 !== 0 && current <= num){
 sumOdd = current + sumOdd; 
 }
 }
 return sumOdd + 1;
 }


//console.log(sumFibs(1000)); // return 1785.
//console.log(sumFibs(4000000)); //return 4613732.
console.log(sumFibs(4)); //return 5.
//console.log(sumFibs(75024)); //return 60696.
//console.log(sumFibs(75025)); //return 135721.


/*
next, очевидно, равно current, а start равно next, тем самым перемещая последовательность.
(start)1+1(next)=2(current)
(start=next)1+2(next=current)=3(current)
(start=next)2+3(next=current)=5(current)
(start=next)3+5(next=current)=8(current)
*/
