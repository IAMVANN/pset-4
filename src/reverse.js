const scanner = require("readline-sync");
let valid = false;
console.log();
let posInt;
let position = 0;
let divisor = 1;
let currentNumber;
let positionForDiv = 0;
let printThis;
while(valid === false){
    posInt = Number(scanner.question("Positive integer: "));
    if(posInt < 1 || Number.isSafeInteger(posInt) == false  || Number.isNaN(posInt) == true){
        valid = false;
    } else {
        valid = true;
    }
}
let length = String(posInt).length - 1;
let lengthMax = length;
for(length; length >= 0; length--){
    divisor = 10 ** length;
    currentNumber = (posInt / divisor) - (posInt/divisor % 1);
    //console.log(posInt/divisor % 1);
    posInt = (posInt % divisor);
    if(length == lengthMax ){
        printThis = currentNumber + "."
    } else {
        printThis =  currentNumber + ", " + printThis;
    }
}
console.log("\n" + String(printThis));
