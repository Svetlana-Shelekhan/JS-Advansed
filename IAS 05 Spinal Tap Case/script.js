

/*4.Сценарии промежуточного алгоритма: Чехол для спинного крана
Преобразуйте строку в спинной регистр. 
Спинальный регистр - это все слова в нижнем регистре, соединенные тире.*/

/*Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.*/



/*function spinalCase(str) {
    var strReplace = str.replace(/(?<=[A-Za-z])(?=[A-Z])|[^A-Za-z]+/g, "-");
    var strLowerCase = strReplace.toLowerCase();
    console.log(strLowerCase);
}*/

function spinalCase(str) {
    var strReplace = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    var strReplace2 = strReplace.replace(/\s|_/g, "-");
    var strLowerCase = strReplace2.toLowerCase();
   return strLowerCase;
}

console.log(spinalCase("This Is Spinal Tap")); //return "this-is-spinal-tap"
console.log(spinalCase("thisIsSpinalTap")); // return "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show")); //"the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh")); //return "teletubbies-say-eh-oh"
console.log(spinalCase("AllThe-small Things")); //"all-the-small-things"

//пробельный символ [ \s]


