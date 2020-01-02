let repeatNumbers = function(data) {
  let loggedNumbers = [],
      currentNumber = '';

  for(let i = 0; i < data.length; i++){
    let count =  data[i][1];
    for(let j = 0; j < count; j++){
      currentNumber += data[i][0];
    }
    loggedNumbers.push(currentNumber);
    currentNumber = '';
  }
  return loggedNumbers.toString(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));