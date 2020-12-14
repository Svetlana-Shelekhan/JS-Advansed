

/*2. Базовый алгоритм сценария: перевернуть строку
Переверните предоставленную строку.
Возможно, вам придется преобразовать строку в массив, прежде чем вы сможете ее перевернуть.
Ваш результат должен быть строкой.*/

/*Basic Algorithm Scripting: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/

 //1.метод решения

/*
function reverseString(str) {
  return str.split("").reverse().join("");
}

//reverseString("hello");   //"olleh"
console.log(reverseString("Howdy"));    //"ydwoH"
//console.log(reverseString("Greetings from Earth"));  //"htraE morf sgniteerG"

/*2.метод
function reverseString(str) {
newStr = "";
for(var i = str.length - 1; i >= 0; i = i - 1) {
newStr = newStr + str[i];
} 
console.log(newStr);
}

reverseString("Greetings from Earth");
*/


function reverseString(str){
	var str = str.split('');
	var i;
	var size = str.length;
	var newArrayString;
	halfArray = Math.floor(size/2);
	
	for(i = 0; i <= halfArray; i += 1){
		newArrayString = str[size - i];
		str[size - i] = str[i];
		str[i] = newArrayString;
	}
	console.log(str.join(''));
}

reverseString("Greetings from Earth");


 /*
 преобразуй строку str в массив, раздели массив на 2: halfArray = Math.floor(size/2), 
 перебрать с помощью for половину массива halfArray, бери первый и последний 
 элемент, меняешь их местами, потом следующие и так идешь 
 к центру массива , преобразовываешь в строку str[i] = newArrayString;.
 str.join('') - Возвращает строку, собранную из элементов указанного объекта, 
 поддерживающего итерирование.
 */