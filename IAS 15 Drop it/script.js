

/*4.Сценарии промежуточного алгоритма: Брось это
Учитывая массив arr, выполните итерацию и удалите каждый элемент, 
начиная с первого элемента (индекс 0), до тех пор, пока функция func 
не вернет истину, когда повторяемый элемент пройдет через нее.

Затем верните остальную часть массива, как только условие будет 
выполнено, в противном случае arr должен быть возвращен как пустой массив.*/


/*Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting 
from the first element (the 0 index) until the function func returns true
 when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.*/

function dropElements(arr, func) {
  var myArr=[], i, size = arr.length;
  for (i = 0; i < size; i += 1) {
    if (func(arr[i])) {
      myArr = arr.slice(i);
      break;
    }
  }
  return myArr;
}




console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); //return [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); //return [1, 0, 1].
console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); //return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //return [].
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); //return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); //return [3, 9, 2].


