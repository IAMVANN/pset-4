const scanner = require("readline-sync");
let valid = false;
console.log(" ");
let posInt;
let position = 0;
let divisor = 1;
let currentNumber;
let positionForDiv = 0;
let sum = 0;
let stringer;
while (valid === false) {
    stringer = scanner.question("Positive integer: ");
    posInt = Number(stringer);
    if (posInt < 1 || Number.isSafeInteger(posInt) == false || Number.isNaN(posInt) == true) {
        valid = false;
    } else {
        valid = true;
    }
}
let length = String(posInt).length - 1;
let lengthMax = length;
for (length; length >= 0; length--) {
    divisor = 10 ** length;
    currentNumber = (posInt / divisor) - (posInt/divisor % 1);
    posInt = (posInt % divisor);
    if(currentNumber % 2 == 1){
        sum += currentNumber;
    }
}
console.log("\n" + sum + ".") ;
console.log(" ");
