let numberOfVowels = function(data) {
  let word = data.split('');
  let vowelCount = 0;

  for(let i  = 0; i < word.length; i++){
    switch(word[i]){
      case 'a':
        vowelCount += 1;
        break;
      case 'e':
        vowelCount += 1;
        break;
      case 'i':
        vowelCount += 1;
        break;
      case 'o':
        vowelCount += 1;
        break;
      case 'u':
        vowelCount += 1;
        break;
    }
  }

  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
