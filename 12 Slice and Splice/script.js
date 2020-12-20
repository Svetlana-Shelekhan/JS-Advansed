

/*2. 
Сценарии базового алгоритма: Нарезать и соединить

Вам даны два массива и индекс.
Скопируйте каждый элемент первого массива во второй массив по порядку.
Начните вставку элементов с индекса n второго массива.
Верните полученный массив. Входные массивы должны оставаться такими 
же после выполнения функции.*/

/*Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the 
same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  var newArr2 = arr2.slice();
  var i, size = arr1.length;
  for(i = 0; i < size; i += 1){
    newArr2.splice(n++, 0, arr1[i]);
  }
  console.log(newArr2);
}

frankenSplice([1, 2, 3], [4, 5], 1);   //return [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1);   //return ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); //return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
