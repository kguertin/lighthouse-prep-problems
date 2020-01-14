let camelCase = function(string){
  let camelString = string;
  for (let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      camelString = string.replace(' ' + string[i + 1], `${string[i+1]}`.toUpperCase())
      string = camelString;
    }
  }
  return camelString;
}


console.log(camelCase('hello world'));