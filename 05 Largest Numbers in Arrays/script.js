
/*
5.Сценарии базового алгоритма: возвращение наибольших чисел в массивах
Вернуть массив, состоящий из наибольшего числа из каждого предоставленного подмассива. 
Для простоты предоставленный массив будет содержать ровно 4 подмассива.

Помните, что вы можете перебирать массив с помощью простого цикла for и обращаться 
к каждому члену с помощью синтаксиса массива arr [i].
*/

/*
Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, 
the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

/*
//1.метод

function bigestNumber(arr){
  var newArr = [];
  
  for(var i = 0; i < arr.length; i = i + 1){
     var max = arr[i][0];
    for(var j = 0; j <= arr[i].length; j = j + 1){      
        if(arr[i][j] > max){
      max = arr[i][j];
    }

    }
    newArr.push(max);
  }
console.log(newArr);
}
bigestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); 
//bigestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[27, 5, 39, 1001]
//bigestNumber([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);  //[9, 35, 97, 1000000]
// bigestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); //[25, 48, 21, -3]
*/

/*
//2.метод хард-код
function bigestNumber(arr){
  var newArr = [];
  
  for(var i = 0; i < arr.length; i = i + 1){
     var max = arr[i][0];
    for(var j = 0; j <= arr[i].length; j = j + 1){      
        if(arr[i][j] > max){
      max = arr[i][j];
    }

    }
    newArr.push(max);
  }
console.log(newArr);
}
bigestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); 
*/


/*
//3.деклоративное решение
function bigestNumber(arr){
  return arr.map(function(v){
    return Math.max.apply(Math, v);
  })
}

console.log(bigestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

*/


//4.метод
function bigestNumber(arr){
  var i, j, size = arr.length, newArr = [], max = 0;
  
  for(i = 0; i < size; i = i + 1){

    for(j = 0; j <= arr[i].length; j = j + 1){      
        if(max < arr[i][j]){
      max = arr[i][j];
    }

    }
    newArr.push(max);
    max = - Infinity;
  }
console.log(newArr);
}
bigestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); 