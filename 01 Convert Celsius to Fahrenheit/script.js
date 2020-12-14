

/*1. Алгоритм преобразования из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия, 
умноженная на 9/5 плюс 32. Вам дана переменная по Цельсию, представляющая температуру в градусах Цельсия. 
Используйте уже определенную переменную по Фаренгейту и присвойте ей температуру по Фаренгейту, 
эквивалентную заданной температуре Цельсия. Используйте упомянутый выше алгоритм, чтобы преобразовать 
температуру Цельсия в градусы Фаренгейта.*/

/*Basic Algorithm Scripting: Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already 
defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.*/



function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

//console.log(convertToF(-30));  //-22
//convertToF(-10);  //14
//console.log(convertToF(0));   //32
//convertToF(20);   //68
//console.log(convertToF(30));   //86


