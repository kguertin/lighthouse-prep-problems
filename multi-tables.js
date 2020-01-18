const multipliicationTable = function(maxValue) {
let table = '';

  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= i; j++){
      let value = j * i;
      table += `${value} `;
    }
    table += `\n`
  }
  return table;
};

console.log(multipliicationTable(10));
