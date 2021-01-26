

/*1.Сценарии промежуточного алгоритма:  поиск и заменa 

Выполните поиск и замените предложение, используя предоставленные аргументы, и верните новое предложение.

Первый аргумент - это предложение для поиска и замены.

Второй аргумент - это слово, которое вы будете заменять (ранее).

Третий аргумент - это то, что вы замените вторым аргументом (после).

Запись
При замене первого символа в исходном слове сохраните регистр. Например, 
если вы хотите заменить слово «Book» словом «dog», его следует заменить 
на «Dog».*/


/*Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you 
are replacing it. For example if you mean to replace the word "Book" 
with the word "dog", it should be replaced as "Dog"*/


function myReplace(str, before, after) {
 if(before[0] === before[0].toUpperCase()){
  after = after[0].toUpperCase() + after.slice(1);
 }else if(before[0] === before[0].toLowerCase()){
  after = after[0].toLowerCase() + after.slice(1);
 }

  return str.replace(before, after);;
}


//console.log(myReplace("Let us go to the store", "store", "mall")); // return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //return "He is Sitting on the couch".
console.log(myReplace("I think we should look up there", "up", "Down")); //return "I think we should look down there".
//console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); //return "This has a spelling error".
//console.log(myReplace("His name is Tom", "Tom", "john")); //return "His name is John".
//console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); //return "Let us get back to more Algorithms"


/*Метод replace() возвращает новую строку с некоторыми или всеми 
сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может
 быть строкой или регулярным выражением, а заменитель может быть строкой 
 или функцией, вызываемой при каждом сопоставлении.*/
 /*Напомним, что основная цель при решении этой проблемы - обеспечить соответствие
  заменяемого слова регистру (заглавным буквам) заменяемого слова.

Для этого мы используем оператор if, чтобы проверить, совпадает ли первая буква 
слова word [0] с заглавным эквивалентным словом [0] .toUpperCase () буквы. Если 
это так, мы преобразуем первую букву нового слова (замена) в верхний регистр
 и добавляем остальные строчные буквы, полученные с помощью метода .slice ().

.slice () при использовании со строкой извлекает часть строки и возвращает 
ее как новую строку. Он получает два аргумента;
начальный индекс, который является обязательным, и конечный индекс, 
который не является обязательным.*/