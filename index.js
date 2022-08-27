function isPalindrome(word) {
  newWord = word.split('')
  reversedWord = newWord.reverse()
  jointWord = reversedWord.join('')
  if(word === jointWord){
    return true
  }else{
    return false
  }
}
//  isPalindrome('aba')
//  isPalindrome('racecar')
//  isPalindrome('a')
//  isPalindrome('robot')
//  isPalindrome('ab')
/* 
  PSEUDOCODE
  1.use split method to split the word 
  2.use reverse method to reverse the split word 
  3.use the join method to join the reversed word
  3.use if statement to check if the word is equal to joint word
  4.return true if the palindrome test passes and false if it fails
*/

/*
EXPLANATION
first we spli the word to return an array then we reverse the strings inside the array using the reverse method,
giving use a new reversed array. We the join the string inside the reversed array using
the join method, which returns a joint stringarray. we then compare the word passed with
the joint word and if the palindrome test results to true the word is the palindrom and test 
otherwise if the result is false
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
