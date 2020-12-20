
/*
5.Сценарии базового алгоритма: Мутации

Верните true, если строка в первом элементе массива содержит все 
буквы строки во втором элементе массива.

Например, ["hello", "Hello"] должно возвращать истину, потому 
что все буквы во второй строке присутствуют в первой, без учета регистра.

Аргументы [«hello», «hey»] должны возвращать false, потому
 что строка «hello» не содержит «y».

Наконец, ["Alien", "line"] должен возвращать true, потому что 
все буквы в "line" присутствуют в "Alien".
*/

/*
Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all 
of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because 
the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of 
the letters in "line" are present in "Alien".
*/


function mutation(arr) {
 for (var i = 0; i < arr[1].length; i++){
  if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
  return false;
  }
 }
 return true;
}


//mutation(["hello", "hey"]); //return false
//mutation(["hello", "Hello"]); //return true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //return true
//mutation(["Mary", "Army"]); //return true.
//mutation(["Mary", "Aarmy"]); //return true.
//mutation(["Alien", "line"]); //return true.
//mutation(["floor", "for"]); //return true.
//mutation(["hello", "neo"]); //return false.
//mutation(["voodoo", "no"]); //return false.
//mutation(["ate", "date"]); //return false.
//mutation(["Tiger", "Zebra"]); //return false.
//mutation(["Noel", "Ole"]); //return true.