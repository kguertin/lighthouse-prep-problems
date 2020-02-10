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
    let priority = {
      a:['camel', 'pascal', 'snake', 'kebab', 'title'],
      b:['vowel', 'consonant'],
      c:['upper', 'lower']
    }
    let order = {
      first: [],
      second: [],
      third: []
    }

    if(Array.isArray(style)){
      style = style
    } else {
      style = [style]
    }

    for(let i of style){
      if(priority.a.includes(i)){
        order.first.push(i);
      } else if (priority.b.includes(i)) {
        order.second.push(i);
      } else {
        order.third.push(i);
      }
    }
    for (let key in order){
      order[key].forEach(style => {
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
          default:
            makeCaseString =makeCaseString;
          }
      });
    }
    return makeCaseString;
  }
      
      console.log(makeCase("this is a string", "camel"));
      console.log(makeCase("this is a string", "pascal"));
      console.log(makeCase("this is a string", "snake"));
      console.log(makeCase("this is a string", "kebab"));
      console.log(makeCase("this is a string", "title"));
      console.log(makeCase("this is a string", "vowel"));
      console.log(makeCase("this is a string", "consonant"));
      console.log(makeCase("this is a string", ["upper", "snake"]));