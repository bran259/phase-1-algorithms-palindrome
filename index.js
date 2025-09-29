function isPalindrome(word) {
  // Write your algorithm here
  isPalindrome("abba")     // true
isPalindrome("racecar")  // true
isPalindrome("a")        // true
isPalindrome("robot")    // false
isPalindrome("ab")       // false

}

/* 
  Add your pseudocode here
*/
function isPalindrome(str) {
  // reverse the string
  const reversed = str.split("").reverse().join("");
  // compare and return boolean
  return str === reversed;
}


// Export for tests
module.exports = isPalindrome;


/*
  Add written explanation of your solution here
  The function reverses the string and compares it to the original.

If they match → returns true (palindrome).

If not → returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
