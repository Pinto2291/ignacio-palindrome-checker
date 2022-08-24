// === Palindrome Checker === Improved Algorithm

function palindrome(str) {

    let regex = /[a-zA-Z0-9]/gi;
  
    let result1 = str.match(regex).join('').toLowerCase();
  
    let result2 = str.match(regex).reverse().join('').toLowerCase();
    
    return (result1 == result2) ? true : false
    
  };
  
  console.log(palindrome("eye")); // true
  console.log(palindrome("_eye")); // true
  console.log(palindrome("My age is 0, 0 si ega ym.")); // true
  console.log(palindrome("race car")); // true
  console.log(palindrome("never odd or even")); // true
  console.log(palindrome("nope")); // false
  
  /* Return true if the given string is a palindrome. Otherwise, return false.A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */