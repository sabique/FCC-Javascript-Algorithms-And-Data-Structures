function rot13(str) {
    let regex = /[A-Z]/g;
    
    //Initial solution
    //return str.split('').map(char => char.match(regex)? String.fromCharCode((char.charCodeAt(0) % 26) + 65) : char).join('');
  
    return str.replace(regex, char => String.fromCharCode((char.charCodeAt(0) % 26) + 65));
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC"); // FREE CODE CAMP
  rot13("SERR CVMMN!"); // FREE PIZZA!
  rot13("SERR YBIR?"); // FREE LOVE?
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.