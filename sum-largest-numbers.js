//Using array sorting
/*
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
  */

//Using for loop
let sumLargestNumbers = function(data){
  let largestNum = data[0],
      secondLargestNum = data[1];

  if(data.length < 2){
    return 'Error'
  }

  if(secondLargestNum > largestNum){
    largestNum = data[1];
    secondLargestNum = data[0];
  }

  for(let i = 0 ; i< data.length; i++){
    if(data[i] > largestNum){
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] > secondLargestNum){
      secondLargestNum = data[i];
    }
  }

  return largestNum + secondLargestNum;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); 