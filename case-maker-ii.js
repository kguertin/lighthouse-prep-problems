let camelCase = string => {
  let camelString = string;
  for (let i = 0; i < string.length; i++){
    if (string[i] === ' '){
      camelString = string.replace(' ' + string[i + 1], `${string[i+ 1]}`.toUpperCase());
      string = camelString;
    }
  }
    return camelString;
}

console.log(camelCase('Hello sweet World'))

const makeCase = function(string, style) {
  let makeCaseString = string
  switch (style) {
    case 'camel':
      makeCaseString = camelCase(makeCaseString);
    }
    return makeCaseString
}
    
    // newString = input.replace(r"(.*?)/\s/([a-zA-Z])", /asb/)
    // return input;
    
    console.log(makeCase("this is a string", "camel"));
    // console.log(makeCase("this is a string", "pascal"));
    // console.log(makeCase("this is a string", "snake"));
    // console.log(makeCase("this is a string", "kebab"));
    // console.log(makeCase("this is a string", "title"));
    // console.log(makeCase("this is a string", "vowel"));
    // console.log(makeCase("this is a string", "consonant"));
    // console.log(makeCase("this is a string", ["upper", "snake"]));
    
    // /// Function to remove white space
    // let removeWhiteSpace = function(string){
    //   let noSpaceString = string
    //   for (let char of string){const makeCase = function(string, style) {
//   let input;
//   let newString;
//   switch (style) {
//     case 'camel':
//     }
    
    //     if (char === ' '){
    //       noSpaceString = string.replace(/\s/g, '');
    //     }
    //   }
    //   return noSpaceString;
    // }
    // //Ask why this isnt working when you append the lower case letter back to the word and try to unshit back into array
    // let makeFirstLetterUpperCase = function(string, camel){
    
    //   let input = string.split(' ');
    //   let newString =input.map(x => {
    //   let str = x.substring(1, x.length);
    //   return x[0].toUpperCase() + str
    //   });
    //   if(camel){
    //     let firstWord = newString.shift();
    //     let str = firstWord.substring(1, firstWord.length);
    
    //     firstWord[0].toLowerCase() + str;
    //     newString.unshift(firstWord)
    //   }
    //   return newString.join('');
    // }