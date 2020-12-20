
/*
4.
Базовый алгоритм сценария: Где я принадлежу

Возвращает наименьший индекс, по которому значение (второй аргумент) 
должно быть вставлено в массив (первый аргумент) после его сортировки. 
Возвращаемое значение должно быть числом.

Например, getIndexToIns ([1,2,3,4], 1.5) должен возвращать 1, 
потому что он больше 1 (индекс 0), но меньше 2 (индекс 1).

Аналогично, getIndexToIns ([20,3,5], 19) должен вернуть 2, 
потому что после сортировки массива он будет выглядеть как [3,5,20], 
а 19 меньше 20 (индекс 2) и больше 5 ( индекс 1).
*/

/*
Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it 
is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once 
the array has been sorted it will look like [3,5,20] and 19 is less 
than 20 (index 2) and greater than 5 (index 1).
*/


function getIndexToIns(arr, num) {
  var size = arr.length; 
  var count = 0;
  for (var i = 0; i < size; i++) {
    if (num > arr[i]) {
      count++;
      }
  } 
  console.log(count) ; 
}

getIndexToIns([10, 20, 30, 40, 50], 35); //return 3
getIndexToIns([10, 20, 30, 40, 50], 30); //return 2
getIndexToIns([40, 60], 50); //return 1
getIndexToIns([3, 10, 5], 3); //return 0
getIndexToIns([5, 3, 20, 3], 5); //return 2
getIndexToIns([2, 20, 10], 19); //return 2
getIndexToIns([2, 5, 10], 15); //return 3
getIndexToIns([], 1); //return 0



