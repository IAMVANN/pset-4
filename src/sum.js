const scanner = require("readline-sync");
let valid = false;
console.log();
let lowerBound;
let upperBound;
let ogLowerbound
while(valid === false){
    lowerBound = Number(scanner.question("Lower bound: "));
    ogLowerbound = lowerBound;
    upperBound = Number(scanner.question("Upper bound: "));
    if(lowerBound >= upperBound || Number.isSafeInteger(lowerBound) == false ||
      Number.isSafeInteger(upperBound) == false || Number.isNaN(lowerBound) == true ||
        Number.isNaN(upperBound) == true || String(lowerBound).include(".") == true || String(lowerbound).include(".")){
        valid = false;
    } else {
        valid = true;
    }
}
let sum = 0;
while(lowerBound <= upperBound){
    if(lowerBound % 2 === 0 && lowerBound != ogLowerbound){
        sum = sum + lowerBound;
    }
    lowerBound++;
}
console.log("\n" + sum.toLocaleString('en') + ".\n");
