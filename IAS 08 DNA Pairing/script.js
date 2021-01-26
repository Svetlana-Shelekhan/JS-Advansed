

/*3.Сценарии промежуточного алгоритма: Спаренные ДНК
В нити ДНК отсутствует спаривающий элемент. Возьмите каждый символ, 
получите его пару и верните результаты в виде 2-мерного массива.

Пары оснований - это пара AT и CG. Сопоставьте отсутствующий элемент 
с предоставленным символом.

Вернуть указанный символ в качестве первого элемента в каждом массиве.

Например, для входного GCG верните [["G", "C"], ["C", "G"], ["G", "C"]]

Символ и его пара объединяются в массив, и все массивы сгруппированы в 
один инкапсулирующий массив.*/

/*Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, 
get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the 
provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays 
are grouped into one encapsulating array.*/

//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//str.split(""); //преобразуем строку в массив ["A","T","C","G","A"]

function pairElement(str) {
  var newArr = [];
  for (var i = 0; i < str.length; i++){
    if(str[i] === "C"){
      newArr.push((str[i] + "G").split(""));
    } else if (str[i] === "G"){
      newArr.push((str[i] + "C").split(""));
    } else if (str[i] === "T"){
      newArr.push((str[i] + "A").split(""));
    } else if (str[i] ==="A"){
      newArr.push((str[i] + "T").split(""));
    }  
  }
  return newArr;
}




console.log(pairElement("ATCGA")); // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); //return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); //return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].






