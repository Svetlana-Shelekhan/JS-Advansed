

/*4.Сценарии промежуточного алгоритма: Сортированный союз
Напишите функцию, которая принимает два или более массива и возвращает 
новый массив уникальных значений в порядке исходных предоставленных массивов.

Другими словами, все значения из всех массивов должны быть включены в их 
исходном порядке, но без дубликатов в окончательном массиве.

Уникальные числа должны быть отсортированы по их исходному порядку, 
но окончательный массив не должен сортироваться в числовом порядке.*/


/*Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the 
final array should not be sorted in numerical order.

Check the assertion tests for examples.*/




function uniteUnique(arr) {
  var args = Array.from(arguments);
  var newArray = [];

  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!newArray.includes(args[i][j])) {
        newArray.push(args[i][j]);
      }
    }
  }

  return newArray;
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //return [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // return [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //return [1, 2, 3, 5, 4, 6, 7, 8]

//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.


