/*
1.метод Деклоративный
*/

/*
var str = 'rotor';

function palindrome(str){
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

console.log(palindrome(str));
*/

/*
2.метод императивный
*/

var str = 'rumvur';

function palindrome(str){
  let centerWords = Math.floor(str.length / 2);
  var i;

  for(i = 0; i < centerWords; i += 1){
    if(str[i] !== str[str.length - i - 1]){
     return false;
    }
  }
  return true;
}

console.log(palindrome(str));