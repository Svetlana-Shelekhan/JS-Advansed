

/*2. 
Сценарии базового алгоритма: повторение строки
Повторить заданную строку str (первый аргумент) количество раз 
(второй аргумент). Вернуть пустую строку, если число не является 
положительным числом. Для решения этой задачи не используйте встроенный 
метод .repeat ().*/

/*Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times 
(second argument). Return an empty string if num is not a 
positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.*/

 //1.метод решения repeat
/*
function repeatStringNumTimes(str, num) {
 
  if(num <= 0){
    repeatString = "";
  }else{
     var repeatString = str.repeat(num);
     
  }
  console.log(repeatString);
}


repeatStringNumTimes("*", 3);   //return ***
repeatStringNumTimes("abc", 3); //return "abcabcabc"
repeatStringNumTimes("abc", 4);  //return "abcabcabcabc"
repeatStringNumTimes("abc", 1);   //return "abc"
repeatStringNumTimes("*", 8);     //return "********"
repeatStringNumTimes("abc", -2);   //return ""
repeatStringNumTimes("abc", 0);    //return "" пустая строка
*/

/*
//2.метод

function repeatStringNumTimes(str, num) {
 var repeatString = '';
 if(num <= 0){
 	var repeatString = '';
 }
 	while(num > 0){
   repeatString = repeatString + str;
    num--;
}
console.log(repeatString);
}
  
 
repeatStringNumTimes("*", 3);   //return ***
//repeatStringNumTimes("abc", 3); //return "abcabcabc"
//repeatStringNumTimes("abc", 4);  //return "abcabcabcabc"
//repeatStringNumTimes("abc", 1);   //return "abc"
//repeatStringNumTimes("*", 8);     //return "********"
//repeatStringNumTimes("abc", -2);   //return ""
//repeatStringNumTimes("abc", 0);    //return "" пустая строка

*/