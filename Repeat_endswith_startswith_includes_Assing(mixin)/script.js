//Repeat Метод конструирует и возвращает новую строку, содержащую 
//указанное количество соединённых вместе копий строки, на которой 
//он был вызван


/*
function repeat(data, count){
	if(typeof data !== 'string'){
		throw Error('This method  work only for string');
	}

	if(count < 0){
		throw Error('This method  work only for positive numbers');
	}
    var repeatString = "",
    	 i;
	for (i = 0; i < count; i += 1){
		repeatString += data;
	}
	return repeatString;
}

console.log(repeat('hello', 4));
*/

//--------------------------------------

//EndsWith - Метод позволяет определить, заканчивается ли строка 
//символами указанными в скобках, возвращая, true или false.


/*
function endsWith(data, end){
	if(typeof data !== 'string'){
		throw Error('This method  work only for string');
	}

	if(typeof end !== 'string'){
		throw Error('This method  work only for string');
	}

	if(data.lastIndexOf(end) > -1){
		return true;
	}else{
		return false;
	}
	
}

console.log(endsWith("world", "ld"));
*/


//--------------------------------------

//StartsWith Метод помогает определить, начинается ли строка с 
//обозначенными в скобках, возвращая, соответственно, true или false.

/*
function startsWith(data,start){
	if(typeof data !== 'string'){
		throw Error('This method  work only for string');
	}

	if(typeof start !== 'string'){
		throw Error('This method  work only for string');
	}

	if(data.indexOf(start)){
		return false;
	}else{
		return true;
	}
}

console.log(startsWith("world", "wo"));
*/


//---------------------------------------

//Includes Метод проверяет, содержит ли строку заданную подстроку, 
//и возвращает, соответственно  trueили  false.

/*
var data = 'Каждый охотник желает знать';

function includes(data,str){
	if(typeof data !== 'string'){
		throw Error('This method  work only for string');
	}

    var i,
     size = data.length, 
     newData = data.split(" ");
    
	for (i = 0; i < size; i += 1){
		if(newData[i] === str){
			return true;
		}
	}
	return false;
}

console.log(includes(data,"знать"));
*/


//----------------------------------

//Assing(mixin)


/*
function mixin() {
    var obj = {},
        i,
        size = arguments.length;
    for (i = 0; i < size; i += 1) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
}

console.log(mixin({a: 1}, {b: 2}, {c: 3}, {c: 4}));
*/


//Метод hasOwnProperty() возвращает логическое значение, 
//указывающее, содержит ли объект указанное свойство.