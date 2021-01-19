

/*1.Сценарии промежуточного алгоритма: различие двух массивов
Сравните два массива и верните новый массив с любыми элементами, найденными 
только в одном из двух данных массивов, но не в обоих. Другими словами, 
верните симметричную разность двух массивов.

Запись
Вы можете вернуть массив с его элементами в любом порядке.*/

/*Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.*/


//1.метод
/*
function diffArray(arr1, arr2) {
  var newArr = [];
  var i, j ;
  for (var i = 0; i < arr1.length; i += 1){
  	if(arr2.indexOf(arr1[i]) === -1){
  		newArr.push(arr1[i]);
  	}
  }
  for(j = 0; j < arr2.length; j += 1){
  	if(arr1.indexOf(arr2[j]) === -1){
  		newArr.push(arr2[j]);
  	}
  }
  console.log(newArr);
}
*/

//2.метод

function diffArray(arr1, arr2) {
  var newArr = [], i, j, size = arr1.length, size1 = arr2.length;

for(i = 0; i < size; i += 1){
  if(!arr2.includes(arr1[i])){
    newArr.push(arr1[i]);
  }
}

for(j = 0; j < size1; j += 1){
  if(!arr1.includes(arr2[j])){
    newArr.push(arr2[j]);
  }
}
return newArr;
}




console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //return ["pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //return ["diorite", "pink wool"]
 console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); //return []
 console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //return [4]



