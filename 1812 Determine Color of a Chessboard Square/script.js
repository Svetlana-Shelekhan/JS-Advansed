

/*1.Вам даны координаты, строка, которая представляет координаты
квадрат шахматной доски. Ниже представлена ​​шахматная доска для справки.
если квадрат белый,вывести истино и ложь, если квадрат черный.

Координата всегда будет представлять действительный квадрат шахматной доски.
В координате всегда будет первая буква, а вторая - цифра*/

/*You are given coordinates, a string that represents the coordinates of 
a square of the chessboard. Below is a chessboard for your reference.Return true 
if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. 
The coordinate will always have the letter first, and the number second.*/


//1.
/*
var squareIsWhite = function(coordinates) {
 switch(coordinates){
     case 'a1':
     case 'a3':
     case 'a5':
     case 'a7':
    case 'b2':
     case 'b4':
     case 'b6':
     case 'b8':
    case 'c1':
    case 'c3':
    case 'c5':
    case 'c7':
     case 'd2':
     case 'd4':
     case 'd6':
     case 'd8':
    case 'e1':
    case 'e3':
    case 'e5':
    case 'e7':
    case 'f2':
     case 'f4':
     case 'f6':
     case 'f8':
    case 'g1':
    case 'g3':
    case 'g5':
    case 'g7':
    case 'h2':
     case 'h4':
     case 'h6':
     case 'h8':
         return false;
         break;
     case 'a2':
     case 'a4':
     case 'a6':
     case 'a8':
    case 'b1':
     case 'b3':
     case 'b5':
     case 'b7':
    case 'c2':
    case 'c4':
    case 'c6':
    case 'c8':
     case 'd1':
     case 'd3':
     case 'd5':
     case 'd7':
    case 'e2':
    case 'e4':
    case 'e6':
    case 'e8':
    case 'f1':
     case 'f3':
     case 'f5':
     case 'f7':
    case 'g2':
    case 'g4':
    case 'g6':
    case 'g8':
    case 'h1':
     case 'h3':
     case 'h5':
     case 'h7':
         return true;
         break;

 }
    if(coordinates === 'white'){
    return true;
    }else{
    return false;
    }
  }
*/


//2.
/*
var squareIsWhite = function(coordinates) {     
 return (coordinates.charCodeAt(0)+coordinates.charCodeAt(1))%2 !== 0
}
*/
//"a1" - Получаем код буквы + к числу(97 + 1)=98 % 2 равен 0 получаем false
// "h3" (104 + 3)= 107 % 2 не равен 0 получаем true
3.
  var squareIsWhite = function(coordinates) {
    let letterCode = coordinates.charCodeAt(0); //Получили код буквы
    
    let num = coordinates[1];
    let letterBool = false
    let numBool = false;
    
    if(letterCode % 2 === 0) {
         letterBool = true;
	}
    if(num % 2 === 0) {
        numBool = true;
    }
   
    if(numBool === letterBool){
        return false;      //если черный квадратик при letterBool=false numBool = false;
    } else {
    	return true;
    }
}
console.log(squareIsWhite("a1"));//return false
console.log(squareIsWhite("h3")); //return true
console.log(squareIsWhite("c7")); //return false


/*
String.prototype.charCodeAt() может преобразовывать строковые символы в ASCII-номера. Например:
"97": "a",
"98": "b",
"99": "c",
"100": "d",
"101": "e",
"102": "f",
"103": "g",
"104": "h"
*/

