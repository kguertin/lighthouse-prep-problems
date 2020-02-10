let camelCase = string => {
  let camelString = string;
  for (let i = 0; i < string.length; i++){
    if (string[i] === ' '){
      camelString = string.replace(' ' + string[i + 1], `${string[i+ 1]}`.toUpperCase());
      x = camelString[0].toLowerCase()
      camelString = x + camelString.slice(1, camelString.length)
      string = camelString;
    }
  }
    return camelString;
}

let pascalCase = string => {
  let pascalString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' '){
      pascalString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
      x = pascalString[0].toUpperCase();
      pascalString =  x + pascalString.slice(1, pascalString.length);
      string = pascalString;
    }
  }
  return pascalString;
}

let snakeStyle = string => {
  let snakeString = string.replace(/ /g, '_');
  return snakeString;
}

let kebabStyle = string => {
  let kebabString = string.replace(/ /g, '-');
  return kebabString;
}

let titleStyle = string => {
  let titleString = [];
  string.split('').forEach((c, index) => {
    if (index == 0){
      titleString.push(string[0].toUpperCase());
    }

    if (string[index - 1] === ' '){
      titleString.push(c.toUpperCase())
    } else if (index > 0){
      titleString.push(c);
    }
  })
  return titleString.join('');
}

let vowelStyle = string => {
  let vowelString = string;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let c of string){
    if (vowels.includes(c)) {
      vowelString = string.replace(c, c.toUpperCase())
      string = vowelString;
    }
  }

  return vowelString;
}

let consonantStyle = string => {
  let consonantString = string;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let c of string) {
    if(!vowels.includes(c)){
      consonantString = string.replace(c, c.toUpperCase)
      string = consonantString;
    }
  }
  return consonantString;
}

// Make Case Function

const makeCase = function(string, style) {
  let makeCaseString = string;let camelCase = string => {
    let camelString = string;
    for (let i = 0; i < string.length; i++){
      if (string[i] === ' '){
        camelString = string.replace(' ' + string[i + 1], `${string[i+ 1]}`.toUpperCase());
        x = camelString[0].toLowerCase()
        camelString = x + camelString.slice(1, camelString.length)
        string = camelString;
      }
    }
      return camelString;
  }
  
  let pascalCase = string => {
    let pascalString = string;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' '){
        pascalString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
        x = pascalString[0].toUpperCase();
        pascalString =  x + pascalString.slice(1, pascalString.length);
        string = pascalString;
      }
    }
    return pascalString;
  }
  
  let snakeStyle = string => {
    let snakeString = string.replace(/ /g, '_');
    return snakeString;
  }
  
  let kebabStyle = string => {
    let kebabString = string.replace(/ /g, '-');
    return kebabString;
  }
  
  let titleStyle = string => {
    let titleString = [];
    string.split('').forEach((c, index) => {
      if (index == 0){
        titleString.push(string[0].toUpperCase());
      }
  
      if (string[index - 1] === ' '){
        titleString.push(c.toUpperCase())
      } else if (index > 0){
        titleString.push(c);
      }
    })
    return titleString.join('');
  }
  
  let vowelStyle = string => {
    let vowelString = string;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let c of string){
      if (vowels.includes(c)) {
        vowelString = string.replace(c, c.toUpperCase())
        string = vowelString;
      }
    }
  
    return vowelString;
  }
  
  let consonantStyle = string => {
    let consonantString = string;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let c of string) {
      if(!vowels.includes(c)){
        consonantString = string.replace(c, c.toUpperCase())
        string = consonantString;
      }
    }
    return consonantString;
  }

  let upperStyle = string => {
    return string.toUpperCase();
  }

  let lowerStyle = string => {
    return string.toLowerCase();
  }
  
  // Make Case Function
  
  const makeCase = function(string, style) {
    let makeCaseString = string;
  
    switch (style) {
      case 'camel':
        makeCaseString = camelCase(makeCaseString);
        break;
      case 'pascal':
        makeCaseString = pascalCase(makeCaseString);
        break;
      case 'snake':
        makeCaseString = snakeStyle(makeCaseString);
        break;
      case 'kebab':
        makeCaseString = kebabStyle(makeCaseString);
        break;
      case 'title':
        makeCaseString =  titleStyle(makeCaseString);
        break;
      case 'vowel':
        makeCaseString = vowelStyle(makeCaseString);
        break;
      case 'consonant': 
        makeCaseString = consonantStyle(makeCaseString)
        break;
      case 'upper':
        makeCaseString = upperStyle(makeCaseString);
        break;
      case 'lower':
        makeCaseString = lowerStyle(makeCaseString);
        break;
      } 
      return makeCaseString;
  }
      
      // newString = input.replace(r"(.*?)/\s/([a-zA-Z])", /asb/)
      // return input;
      
      console.log(makeCase("this is a string", "camel"));
      console.log(makeCase("this is a string", "pascal"));
      console.log(makeCase("this is a string", "snake"));
      console.log(makeCase("this is a string", "kebab"));
      console.log(makeCase("this is a string", "title"));
      console.log(makeCase("this is a string", "vowel"));
      console.log(makeCase("this is a string", "consonant"));
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

  switch (style) {
    case 'camel':
      makeCaseString = camelCase(makeCaseString);
      break;
    case 'pascal':
      makeCaseString = pascalCase(makeCaseString);
      break;
    case 'snake':
      makeCaseString = snakeStyle(makeCaseString);
      break;
    case 'kebab':
      makeCaseString = kebabStyle(makeCaseString);
      break;
    case 'title':
      makeCaseString =  titleStyle(makeCaseString);
      break;
    case 'vowel':
      makeCaseString = vowelStyle(makeCaseString);
      break;
    case 'consonant': 
      makeCaseString = consonantStyle(makeCaseString);
    } 
    return makeCaseString;
}
    
    // newString = input.replace(r"(.*?)/\s/([a-zA-Z])", /asb/)
    // return input;
    
    console.log(makeCase("this is a string", "camel"));
    console.log(makeCase("this is a string", "pascal"));
    console.log(makeCase("this is a string", "snake"));
    console.log(makeCase("this is a string", "kebab"));
    console.log(makeCase("this is a string", "title"));
    console.log(makeCase("this is a string", "vowel"));
    console.log(makeCase("this is a string", "consonant"));
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