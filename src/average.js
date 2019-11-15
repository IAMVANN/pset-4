const scanner = require("readline-sync");
let valid = true;
let sum = 0;
let amountOfTimes = 0;
let nonNegativeInt;
console.log();
while (valid == true){
    nonNegativeInt = Number(scanner.question("Non-negative integer: "));
    if(nonNegativeInt >= 0 && Number.isNaN(nonNegativeInt) == false && Number.isSafeInteger(nonNegativeInt) == true ){
        sum = sum + nonNegativeInt;
        amountOfTimes++;
    } else if(nonNegativeInt <= 0){
        valid = false;
    }
}
const average = (sum / amountOfTimes).toLocaleString('en' , {
    style:'decimal', maximumFractionDigits: 3, minimumFractionDigits: 3
})
console.log("\n" +  average + ".");
