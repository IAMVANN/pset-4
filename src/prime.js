const scanner = require("readline-sync");
let valid = false;
let nonNegativeInt;
let prime = true;
let finished = false;
console.log();
while(valid == false){
    nonNegativeInt = Number(scanner.question("Non-negative integer: "));
    if(nonNegativeInt < 0 || Number.isSafeInteger(nonNegativeInt) == false || Number.isNaN(nonNegativeInt) == true){
    } else {
        valid = true;
    }
}
let lowerNumber = nonNegativeInt;
while(prime == true && finished == false){
    lowerNumber--;
    if(lowerNumber == 1 ){
        prime = true;
        finished = true;
    } else if(nonNegativeInt % lowerNumber == 0 || nonNegativeInt == 1 ){
        prime = false;
    }
}
const printThis = (prime == true) ? "\nPrime." : "\nNot prime."
console.log(printThis);
