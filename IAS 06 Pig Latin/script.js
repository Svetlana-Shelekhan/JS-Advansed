

/*1. Сценарии промежуточного алгоритма: Свинья-латынь

Свинья-латынь - это способ изменить английские слова. Правила следующие:
- Если слово начинается с согласной, возьмите первую согласную или группу 
согласных, переместите ее в конец слова и добавьте к ней «ау».
- Если слово начинается с гласной, просто добавьте «way» в конце.
Переведите предоставленную строку на Pig Latin. Входные строки 
гарантированно будут английскими словами в нижнем регистре.*/

/*Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are 
guaranteed to be English words in all lowercase.*/

//Метод slice(begin,end) возвращает новый массив, содержащий копию части исходного массива.
//begin - Индекс (счёт начинается с нуля), по которому начинать извлечение.
//end - Индекс (счёт начинается с нуля), по которому заканчивать извлечение. Метод slice() извлекает элементы с индексом меньше end.

function translatePigLatin(str) {
	var vowel = ["a","e","i","o","u"], i, size = str.length;

	for(i = 0; i < size; i += 1){
		var newString = str[i];
		if(vowel.indexOf(newString) != -1 && i === 0){  //если слово начинается на гласную
			return str + "way";
		}
		else if(vowel.indexOf(newString) != -1){    //если слово начинается на согласную (если не равно -1 = false - это согласная)
			return str.slice(i) + str.slice(0, i) + "ay";
		}
	}
  return str + "ay";
}

console.log(translatePigLatin("california"));  //return "aliforniacay".
console.log(translatePigLatin("paragraphs"));  //return "aragraphspay".
console.log(translatePigLatin("glove"));   //return "oveglay".
console.log(translatePigLatin("algorithm"));   //return "algorithmway".
 console.log(translatePigLatin("eight"));   //return "eightway".
console.log(translatePigLatin("schwartz"));  //return "artzschway".
console.log(translatePigLatin("rhythm")); //return "rhythmay"
