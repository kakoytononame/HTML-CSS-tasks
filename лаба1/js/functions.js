function isPalindrom(string) {
    
    string = string.toLowerCase().replace(/ /g, '');

    const reversedStr = string.split('').reverse().join('');

    return string === reversedStr;
}

function getNumbers(string) {

    const isNumber = string.match(/[0-9]/g);

    if(isNumber){
        const digitString = isNumber.join('');
        
        const number = parseInt(digitString, 10);
        
        return isNaN(number) ? NaN : number;
    }
    else{
        return NaN;
    }
}

function pushString(oldString, minLength, newSimbols) {
    if (oldString.length >= minLength) {
      return oldString;
    }
  
    const differentLength = minLength - oldString.length;
    let newString = newSimbols;
  
    while (newString.length < differentLength) {
        newString += newString;
    }
  
    if (newString.length > differentLength) {
        newString = newString.slice(0, differentLength);
    }
  
    return newString + oldString;
  }

  function isLowerThan(string, length){
    
    return string.length <= length;
  }