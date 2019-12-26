let sumLargestNumbers = function(data) {
  let num = data.sort(function(a,b){
    return b - a;
  });

  if(data.length < 2){
    return 'error';
  } else if(data.length === 2){
    num =  num[0] + num[1];
    return num;
  } else {
    num.splice(2, data.length - 1);
    num = num[0] + num[1];
    return num;
    
    }
  }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));