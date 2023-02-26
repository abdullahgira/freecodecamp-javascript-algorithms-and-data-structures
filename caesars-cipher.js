/**
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the letters
 * are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are
 * shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a
 * decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 *
 * Challenge URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
 * You can test the code at the Challenge URL
 */
function rot13(str) {
  // LBH QVQ VG!
  let charCode = "";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\W/)) {
      newStr += str[i];
      continue;
    }
    charCode = str.charCodeAt(i);
    if (charCode > 77) newStr += String.fromCharCode(charCode - 13);
    else newStr += String.fromCharCode(charCode + 13);
  }
  return newStr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
