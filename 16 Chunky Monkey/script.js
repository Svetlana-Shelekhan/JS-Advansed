
/*
6.Сценарии базового алгоритма: Коренастая обезьяна

Напишите функцию, которая разбивает массив (первый аргумент) 
на группы по длине (второй аргумент) и возвращает их как двумерный массив.
*/

/*
Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups 
the length of size (second argument) and returns them as a two-dimensional array.
*/



function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var sizeNewArray = Math.ceil(arr.length / size);
  var i;

  for(i = 0; i < sizeNewArray; i += 1){
    var spliceArray = arr.splice(0, size);
    newArray.push(spliceArray);
  }
  console.log(newArray);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //return [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);         //[[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);         //[[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);         //[[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);       //[[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);  //[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);   //return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

