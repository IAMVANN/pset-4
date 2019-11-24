const scanner = require("readline-sync");
let valid = true;
let sum;
let amountOfTimes = 0;
let stringer;
let nonNegativeInt;
console.log(" ");
while (valid == true) {
    nonNegativeInt = scanner.question("Non-negative integer: ");
    stringer = nonNegativeInt;
    nonNegativeInt = Number(nonNegativeInt);
    if (nonNegativeInt >= 0 && Number.isNaN(nonNegativeInt) == false && Number.isSafeInteger(nonNegativeInt) == true &&
      stringer.includes(".") == false && stringer != "") {
        if (Number.isNaN(Number(sum)) == true) {
            sum = 0;
        }
        sum = sum + nonNegativeInt;
        amountOfTimes++;
    } else if (nonNegativeInt < 0 && Number.isSafeInteger(nonNegativeInt) == true &&
      Number.isNaN(Number(sum)) == false) {
        valid = false;
    }
}
const average = (sum / amountOfTimes).toLocaleString('en' , {
    style:'decimal', maximumFractionDigits: 3, minimumFractionDigits: 3
})
console.log("\n" +  average + ".");

console.log(" ");
