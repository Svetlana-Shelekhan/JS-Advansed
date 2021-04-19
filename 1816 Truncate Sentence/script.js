

/*1.Предложение - это список слов, разделенных одним пробелом без начальных 
и конечных пробелов. Каждое из слов состоит только из прописных и строчных 
английских букв (без знаков препинания).

Например, «Привет, мир», «ПРИВЕТ» и «Привет, мир, привет, мир» - это предложения.
Вам даны предложение s и целое число k. Вы хотите обрезать s так, чтобы он 
содержал только первые k слов. Вернуть s после его усечения.*/

/*A sentence is a list of words that are separated by a single space with no 
leading or trailing spaces. Each of the words consists of only uppercase and 
lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that 
it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
Example 1:

Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".*/

/*
1.
function truncateSentence(s, k) {
  var newS = s.split(' ');
  return newS.slice(0, k).join(" ");
  
}
*/

function truncateSentence(s, k) {
    var newS = s.split(" ");
    var newString = [];
   
    for(var i = 0; i < k; i++){
        newString[i] = newS[i];
    }
    return newString.join(" ");
}
  


console.log(truncateSentence("What is the solution to this problem", 4));//return "What is the solution"
console.log(truncateSentence("chopper is not a tanuki", 5)); //return "chopper is not a tanuki"
console.log(truncateSentence("Hello how are you Contestant", 4)); //return "Hello how are you"



