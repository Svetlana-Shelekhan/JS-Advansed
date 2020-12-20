
/* 3.
Создание сценариев базового алгоритма: Ложный вышибала

Удалите из массива все ложные значения.
Ложные значения в JavaScript: false, null, 0, "", undefined и NaN.
Подсказка: попробуйте преобразовать каждое значение в логическое.*/


/*Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.*/

//1.метод

/*
function bouncer(arr) {
  console.log(arr.filter(Boolean)) ;
}

bouncer([7, "ate", "", false, 9]);  //return [7, "ate", 9]
bouncer(["a", "b", "c"]);           //return ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]);  //return []
bouncer([null, NaN, 1, 2, undefined]);     //return [1, 2]
*/


//2.метод
function bouncer(arr) {
	var newArray = [];
  for(var i = 0; i <= arr.length; i += 1){
  	if(arr[i]){
  		newArray.push(arr[i]);
  	}
  }
  console.log(newArray);
}

bouncer([7, "ate", "", false, 9]);  //return [7, "ate", 9]
bouncer(["a", "b", "c"]);           //return ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]);  //return []
bouncer([null, NaN, 1, 2, undefined]);     //return [1, 2]

