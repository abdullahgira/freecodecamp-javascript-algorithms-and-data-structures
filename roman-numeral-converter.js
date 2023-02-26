/**
 * Convert the given number into a roman numeral.
 *
 * Roman numerals	  | Arabic numerals
 * ---------------------------------
 * M	              | 1000
 * CM	              | 900
 * D	              | 500
 * CD	              | 400
 * C	              | 100
 * XC	              | 90
 * L	              | 50
 * XL	              | 40
 * X	              | 10
 * IX	              | 9
 * V	              | 5
 * IV	              | 4
 * I	              | 1
 *
 * All roman numerals answers should be provided in upper-case.
 *
 * Challenge URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
 * You can test the code at the Challenge URL
 */
function convertToRoman(num) {
  const ROMAN_NUMERALS = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const NUMERALS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";
  for (let i = 0; i < NUMERALS.length; i++) {
    while (NUMERALS[i] <= num) {
      result += ROMAN_NUMERALS[i];
      num -= NUMERALS[i];
    }
  }
  return result;
}

console.log(convertToRoman(1));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(36));
