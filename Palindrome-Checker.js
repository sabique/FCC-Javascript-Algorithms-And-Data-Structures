function palindrome(str) {
    let regex = /\s|_|\W/g;
  
    let cleanStr = str.replace(regex,'').toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    
    if(cleanStr === reverseStr)
      return true;
    else 
      return false;
  }
  
  
  console.log(palindrome("eye")); //true
  console.log(palindrome("_eye")); //true
  console.log(palindrome("race car")); //true
  console.log(palindrome("not a palindrome")); // false
  console.log(palindrome("A man, a plan, a canal. Panama")); // true
  console.log(palindrome("never odd or even")); //true
  console.log(palindrome("nope")); //false
  console.log(palindrome("almostomla")); //false
  console.log(palindrome("My age is 0, 0 si ega ym.")); //true
  console.log(palindrome("1 eye for of 1 eye.")); //false
  console.log(palindrome("0_0 (: /-\\ :) 0-0")); //true
  console.log(palindrome("five|\\_/|four")); //false