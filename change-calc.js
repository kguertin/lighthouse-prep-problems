let calculateChange = function(total, cash) {
  let changeBack = {
  };
  let changeDue = cash - total;
  
  for(let i = 0; changeDue > 0; i++){
    if(changeDue >= 2000){
      if(changeBack.twentyDollar){
        changeBack.twentyDollar += 1
      } else {
        changeBack.twentyDollar = 1;
      }
      changeDue -= 2000;
    } else if (changeDue >= 1000){
      if(changeBack.tenDollar){
        changeBack.tenDollar += 1
      } else {
        changeBack.tenDollar = 1;
      }
      changeDue -= 1000;
    } else if (changeDue >= 500){
      if(changeBack.fiveDollar){
        changeBack.fiveDollar += 1
      } else {
        changeBack.fiveDollar = 1;
      }
      changeDue -= 500;
    } else if (changeDue >= 200) {
      if(changeBack.toonie){
        changeBack.toonie += 1
      } else {
        changeBack.toonie = 1;
      }
      changeDue -= 200;
    } else if (changeDue >= 100){
      if(changeBack.loonie){
        changeBack.loonie += 1
      } else {
        changeBack.loonie = 1;
      }
      changeDue -= 100;
    } else if (changeDue >= 25){
      if(changeBack.quarter){
        changeBack.quarter += 1
      } else {
        changeBack.quarter = 1;
      }
      changeDue -= 25
    } else if (changeDue >= 10){
      if(changeBack.dime){
        changeBack.dime += 1
      } else {
        changeBack.dime = 1;
      }
      changeDue -= 10;
    } else if (changeDue >= 5){
      if(changeBack.nickel){
        changeBack.nickel += 1
      } else {
        changeBack.nickel = 1;
      }
      changeDue -= 5
    } else if (changeDue >= 1){
      if(changeBack.penny){
        changeBack.penny += 1
      } else {
        changeBack.penny = 1;
      }
      changeDue -= 1;
    }
  }


  return changeBack
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));