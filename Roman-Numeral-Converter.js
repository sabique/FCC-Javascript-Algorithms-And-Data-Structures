function convertToRoman(num) {

    var decimalArr = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanArr = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanNum = '';
  
    for (var index = 0; index < decimalArr.length; index++) {
      while (decimalArr[index] <= num) {
        romanNum += romanArr[index];
        num -= decimalArr[index];
      }
    }
    return romanNum;
  }
  
  convertToRoman(2); // "II".
  convertToRoman(3); // "III".
  convertToRoman(4); // "IV".
  convertToRoman(5); // "V".
  convertToRoman(9); // "IX".
  convertToRoman(12); // "XII".
  convertToRoman(16); // "XVI".
  convertToRoman(29); // "XXIX".
  convertToRoman(44); // "XLIV".
  convertToRoman(45); // "XLV"
  convertToRoman(68); // "LXVIII"
  convertToRoman(83); // "LXXXIII"
  convertToRoman(97); // "XCVII"
  convertToRoman(99); // "XCIX"
  convertToRoman(400); // "CD"
  convertToRoman(500); // "D"
  convertToRoman(501); // "DI"
  convertToRoman(649); // "DCXLIX"
  convertToRoman(798); // "DCCXCVIII"
  convertToRoman(891); // "DCCCXCI"
  convertToRoman(1000); // "M"
  convertToRoman(1004); // "MIV"
  convertToRoman(1006); // "MVI"
  convertToRoman(1023); // "MXXIII"
  convertToRoman(2014); // "MMXIV"
  convertToRoman(3999); // "MMMCMXCIX"