const scanner = require("readline-sync");
let valid = false;
console.log();
let posInt;
let numHolder = [];
let position = 0;
let divisor = 1;
let divisorArray = [];
let positionForDiv = 0;
let maxposition;
let oddSum = 0;
while(valid === false){
    posInt = Number(scanner.question("Positive integer: "));
    if(posInt < 1 || Number.isSafeInteger(posInt) == false || Number.isNaN(posInt) == true){
        valid = false;
    } else {
        valid = true;
    }
}
let length = String(posInt).length;
let lengthClone = length;
for(length; length > 0; length--){
    divisorArray[positionForDiv] = divisor;
    divisor = divisor * 10;
    if (length > 1){
        positionForDiv++;
    }
}
let currentNumber = posInt;
while(positionForDiv >= 0){
    numHolder[position] = (currentNumber - (currentNumber % divisorArray[positionForDiv]))
      / divisorArray[positionForDiv];
    currentNumber = currentNumber % divisorArray[positionForDiv];
    if(positionForDiv == 0){
        maxposition = position;
    } else {
        position++;
    }
    positionForDiv--;
}
while(position >= 0){
    if(numHolder[position] % 2 == 1){
        oddSum += numHolder[position];
    }
    position--;
}
console.log("\n" + oddSum + ".");
