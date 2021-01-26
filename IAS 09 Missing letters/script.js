

/*4.Сценарии промежуточного алгоритма: Пропущенные буквы
Найдите пропущенную букву в переданном диапазоне букв и верните ее.
Если в диапазоне присутствуют все буквы, вернуть undefined.*/

/*Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var startingPosition = alphabet.indexOf(str[0]);
  var missingLetter = alphabet.slice(startingPosition), i, size = str.length;

  for(i = 0; i < size; i += 1){
    if(str[i] != missingLetter[i]){
      return missingLetter[i];
    }
  }

}

console.log(fearNotLetter("abce")); //return "d".
console.log(fearNotLetter("abcdefghjklmno")); //return "i".
console.log(fearNotLetter("stvwx")); //return "u".
console.log(fearNotLetter("bcdf")); //return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //return undefined.


//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.