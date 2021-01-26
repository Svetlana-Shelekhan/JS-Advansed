

/*1. Сценарии промежуточного алгоритма: Преобразуйте объекты HTML

Преобразуйте символы &, <,>, "(двойные кавычки) и '(апостроф) в 
строке в соответствующие им объекты HTML.*/

/*Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.*/


function convertHTML(str) {
	var newString = str.split(""), i, size = newString.length;

	for(i = 0; i < size; i += 1){
		switch(newString[i]){
			case '&':
			newString[i] = '&amp;';
			break;
			case '<':
			newString[i] = '&lt;';
			break;
			case '>':
			newString[i] = '&gt;';
			break;
			case '"':
			newString[i] = '&quot;';
			break;
			case "'":
			newString[i] = '&apos;';
			break;
		}
	}
	return str = newString.join("");
}

console.log(convertHTML("Dolce & Gabbana"));  //return "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos"));  //return "Hamburgers &lt; Pizza &lt; Tacos".
console.log(convertHTML("Sixty > twelve"));   //return "Sixty &gt; twelve".
console.log(convertHTML('Stuff in "quotation marks"'));   //return "Stuff in &quot;quotation marks&quot;".
 console.log(convertHTML("Schindler's List"));   //return "Schindler&apos;s List".
console.log(convertHTML("<>"));  //return "&lt;&gt;"
console.log(convertHTML("abc")); //return "abc".

/*HTML entities:
< - &lt;
> - &gt;
" - &quot;
' - &apos;
& - &amp;
*/

