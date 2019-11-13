const scanner = require("readline-sync");
let valid = false;
console.log();
let posInt;
let numHolder = [];
let position = 0;
let divisor = 1;
let divisorArray = [];
let positionForDiv = 0;
let printThis = "\n";
let maxposition;
while(valid === false){
    posInt = Number(scanner.question("Positive integer: "));
    if(posInt < 1 || Number.isSafeInteger(posInt) == false  || Number.isNaN(posInt) == true){
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

    if(position == 0 ){
        printThis = printThis + numHolder[position] + "."
    } else {
        printThis = printThis + numHolder[position] + ", ";
    }
    lengthClone--;
    position--;
}
console.log(printThis);
//I DID NOT FINISH. number.0 like 5.0 does not work and i need to find a way
