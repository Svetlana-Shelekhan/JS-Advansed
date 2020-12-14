
/*
4.
Сценарии базового алгоритма: поиск самого длинного слова в строке
Верните длину самого длинного слова в предложенном предложении.
Ваш ответ должен быть числом.
*/

/*
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

/*1.метод
function findLongestWordLength(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i = i+1){
    if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
    }
  }
  console.log('Самое длинное слово в предложении: ' + longestWord);
}

//findLongestWordLength("The quick brown fox jumped over the lazy dog");   //6
//findLongestWordLength("May the force be with you");                      //5
//findLongestWordLength("Google do a barrel roll");                        //6
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");  //8
//findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); //19

*/

function findLongestWordLength(str) {
  var i, 
  	size = str.length, 
  	count = 0, 
  	max = 0;
  
  for(i = 0; i < size; i += 1){
    if(str[i] === ' '){         //если находим пустое место обнуляем счетчик count =0
      count = 0;
    }else{
    	count += 1;     // накапливаем длину предыдущего слова
    }
    if(max < count) max = count;
      }
  console.log('Самое длинное слово в предложении: ' + max);
}

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");  //8