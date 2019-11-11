const scanner = require("readline-sync");
let valid = false;
console.log();
let lowerBound;
let upperBound;
while(valid === false){
    lowerBound = Number(scanner.question("Lower bound: "));
    upperBound = Number(scanner.question("Upper bound: "));
    if(lowerBound >= upperBound || upperBound > Number.MAX_SAFE_INTEGER || lowerBound < Number.MIN_SAFE_INTEGER ||
      Number.isNaN(lowerBound) == true || Number.isNaN(upperBound) == true){
        valid = false;
    } else {
        valid = true;
    }
}
let sum = 0;
while(lowerBound <= upperBound){
    if(lowerBound % 2 === 0){
        sum = sum + lowerBound;
    }
    lowerBound++;
}
console.log("\n" + sum.toLocaleString('en') + ".\n");
