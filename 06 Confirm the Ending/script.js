

/*1. 
Сценарий базового алгоритма: подтвердите окончание

Проверьте, заканчивается ли строка (первый аргумент, str) 
заданной целевой строкой (второй аргумент, цель).Но для этой задачи мы 
хотели бы, чтобы вы вместо этого использовали один из методов подстроки JavaScript.
Но для этой задачи мы хотели бы, чтобы вы вместо этого 
использовали один из методов подстроки JavaScript.
*/

/*Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given 
target string (second argument, target).*/


/*

//1.метод endsWith() - Проверяет заканчивается ли строка со значением другой строки str.

function confirmEnding(str, target) {
	var whatEndString = str.endsWith(target);
	console.log(whatEndString);
}

//confirmEnding("Bastian", "n");   //true
//confirmEnding("Congratulation", "on");   //true
confirmEnding("Connor", "n"); //
//confirmEnding("He has to give me a new name", "name"); //true
confirmEnding("Open sesame", "same"); //true
//confirmEnding("Open sesame", "sage"); //false
confirmEnding("Open sesame", "game"); //false
//confirmEnding("Abstraction", "action"); //true
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //false

*/ 
//2.метод includes() -Проверяет есть ли в строке значение строки str. 

/*
function confirmEnding(str, target) {
  var whereTarget = str.includes(target,str.length - target.length);

  console.log(whereTarget);
}

confirmEnding("Bastian", "n");   //true
confirmEnding("Congratulation", "on");   //true
confirmEnding("Connor", "n"); //false
confirmEnding("He has to give me a new name", "name"); //true
confirmEnding("Open sesame", "same"); //true
confirmEnding("Open sesame", "sage"); //false
confirmEnding("Open sesame", "game"); //false
confirmEnding("Abstraction", "action"); //true
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //false
*/



//3.метод substring() вместе со свойсвом length-для извлечения последних символов из строки.
/*
function confirmEnding(str, target) {
  var whereTarget = str.substring(str.length - target.length);
  if(whereTarget === target){
  	whereTarget = true;
  	console.log(whereTarget);
  }else{
  	whereTarget = false;
  	console.log(whereTarget);
  }
  
}

//confirmEnding("Bastian", "n");   //true
//confirmEnding("Congratulation", "on");   //true
//confirmEnding("Connor", "n"); //false
//confirmEnding("He has to give me a new name", "name"); //true
//confirmEnding("Open sesame", "same"); //true
//confirmEnding("Open sesame", "sage"); //false
//confirmEnding("Open sesame", "game"); //false
//confirmEnding("Abstraction", "action"); //true
//confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false
//confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //false

*/