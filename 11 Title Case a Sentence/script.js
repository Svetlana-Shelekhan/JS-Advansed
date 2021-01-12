<<<<<<< HEAD
/*1. 
Сценарий базового алгоритма: титульный регистр a предложение

Верните предоставленную строку с заглавной первой буквой каждого слова. 
Убедитесь, что остальная часть слова написана строчными буквами.
В этом упражнении вам также следует использовать такие соединительные слова,
 как «the» и «of», с заглавной буквы.
*/

/*Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize 
connecting words like "the" and "of".*/



function titleCase(str) {
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }

  console.log(str.join(' '));
}



titleCase("I'm a little tea pot");    //return 'I'm A Little Tea Pot'
titleCase("sHoRt AnD sToUt");     //return 'Short And Stout.'
=======
/*1. 
Сценарий базового алгоритма: титульный регистр a предложение

Верните предоставленную строку с заглавной первой буквой каждого слова. 
Убедитесь, что остальная часть слова написана строчными буквами.
В этом упражнении вам также следует использовать такие соединительные слова,
 как «the» и «of», с заглавной буквы.
*/

/*Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize 
connecting words like "the" and "of".*/



function titleCase(str) {
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }

  console.log(str.join(' '));
}



titleCase("I'm a little tea pot");    //return 'I'm A Little Tea Pot'
titleCase("sHoRt AnD sToUt");     //return 'Short And Stout.'
>>>>>>> 2fe410422ceefccc6affc18414e3566d1ced4019
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); 