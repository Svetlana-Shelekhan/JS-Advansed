/*
20. Valid Parentheses (leetcode.com)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1.Open brackets must be closed by the same type of brackets.
2.Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true
*/

/*
function isValid(s) {
    var symbols = '()[]{}', size = s.length, i, position, arr = [];
    
    for(i = 0; i < size; i += 1) {
        position = symbols.indexOf(s[i]);
        
        if(position === -1) continue;
        
        if(position % 2 === 0){
        	arr.push(position + 1); // push next expected brace position
        } else{
        	if(arr.length === 0 || arr.pop() !== position){
        		return false;
        	}
        }
    }
    if(arr.length === 0){
      return true;
    }
    return false;
}




console.log(isValid('([)'));

*/




