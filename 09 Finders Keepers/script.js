
/*
4.
Базовый алгоритм сценария:Искатели Хранители
Создайте функцию, которая просматривает массив arr и возвращает 
первый элемент в нем, который проходит «проверку истинности». 
Это означает, что для данного элемента x «проверка истинности» 
пройдена, если func (x) истинно. Если ни один элемент не прошел 
проверку, вернуть undefined.
*/

/*
Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array arr and returns the first 
element in it that passes a 'truth test'. This means that given an 
element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.
*/


function findElement(arr, func) {
  let num = 0;
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      num = arr[i];
      break;
    }else{
      num = undefined;
    }
  }
  console.log(num);
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); //return 8
 //findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });   //return undefined.


