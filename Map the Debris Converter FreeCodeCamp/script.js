//Map the Debris

/*
Return a new array that transforms the elements' average altitude 
into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. 
The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value 
of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 

for(let i in arr){
	
	 var orbitalPeriodResult = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM));
	arr[i] = {name: arr[i].name, orbitalPeriod: orbitalPeriodResult}
	}
 
 
 return arr;
}




console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //[{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
//[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]


//орбитальный период 
//https://aws1.discourse-cdn.com/freecodecamp/original/3X/3/b/3b3831f4334b255f143b3b1cdb0656f41bd008df.png
//где м - это GM,
// a - (earthRadius + avgAlt)
//Math.sqrt - возвращает квадратный корень числа
//Math.pow(base, exponent): возвращает основание, возведённое в степень показатель 
//base - Основание степени.
//exponent -Показатель степени, в которую возводится основание base.
//Метод Math.round() возвращает число, округлённое к ближайшему целому.