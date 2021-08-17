//Convert the given number into a roman numeral.

function convertToRoman(num) {
 var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
 	 roman = '',
 	 i;
 	 
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}


convertToRoman(2); //return the string II
convertToRoman(3); //return the string III
convertToRoman(4); //return the string IV
convertToRoman(5); //return the string V
convertToRoman(9); //return the string IX
convertToRoman(12); //return the string XII
convertToRoman(16); //return the string XVI
convertToRoman(29); //return the string XXIX
convertToRoman(36);
convertToRoman(44); //return the string XLIV
convertToRoman(45); //return the string XLV
convertToRoman(68); //return the string LXVIII
convertToRoman(83); //return the string LXXXIII
convertToRoman(97); //return the string XCVII
convertToRoman(99); //return the string XCIX
convertToRoman(400); //return the string CD
convertToRoman(500); //return the string D
convertToRoman(501); //return the string DI
convertToRoman(649); //return the string DCXLIX
convertToRoman(798); //return the string DCCXCVIII
convertToRoman(891); //return the string DCCCXCI
convertToRoman(1000); //return the string M
convertToRoman(1004); //return the string MIV
convertToRoman(1006); //return the string MVI
convertToRoman(1023); //return the string MXXIII
convertToRoman(2014); //return the string MMXIV
convertToRoman(3999); //return the string MMMCMXCIX






