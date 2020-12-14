
/* 3.
Создание сценариев базового алгоритма: усечение строки

Обрезать строку (первый аргумент), если она длиннее заданной максимальной 
длины строки (второй аргумент). Вернуть усеченную строку с окончанием ....*/


/*Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given 
maximum string length (second argument). 
Return the truncated string with a ... ending.*/


function truncateString(str, num) {
  if(str.length > num){
  	var newTruncateString = str.slice(0, num) + '...';
  }else{
  	newTruncateString = str;
  }
console.log(newTruncateString);
}


truncateString("A-tisket a-tasket A green and yellow basket", 8); //return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11)  //return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); //return "A...".
truncateString("Absolutely Longer", 2); //return "Ab...".


/*
str.slice(beginIndex[, endIndex])
Метод slice() извлекает текст из одной строки и возвращает новую строку.
Метод slice() извлекает все символы до индекса endIndex, не включая сам 
этот индекс. Вызов str.slice(1, 4) извлечёт символы со второго по 
четвёртый (символы под индексами 1, 2 и 3).
endIndex - Индекс, перед которым заканчивать извлечение 
(нумерация начинается с нуля). Символ по этому индексу не будет включён.
beginIndex - Индекс, с которого начинать извлечение (нумерация начинается с нуля).
*/