const urlEncode = function(text) {
  let stringArray = [],
      encodedString ='';

  stringArray = text.split('')
  
  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i] === ' '){
      stringArray[i] = '%20';
    }
  }
  
  encodedString = stringArray.join('');  
  return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));