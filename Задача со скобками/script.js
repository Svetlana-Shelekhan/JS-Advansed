
function validParens(s) {
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
    return arr.length === 0;
}



console.log(validParens('()[]{}')); // true
console.log(validParens('(]')); // false
console.log(validParens('([)]')); // false
console.log(validParens('{[]}')); // true


