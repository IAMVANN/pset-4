const scanner = require("readline-sync");
let valid = false;
let positiveInt;
console.log();
while(valid == false){
    positiveInt = Number(scanner.question("Positive Integer: "));
    if(Number.isSafeInteger(positiveInt) == false || Number.isNaN(positiveInt) == true){
    } else if(positiveInt >= 1 && positiveInt <=78) {
        valid = true;
    }
}
let previous = 1;;
let previousTwo = 0;
let sum = 0;
if(positiveInt == 1){
    console.log("\n0.");
} else{
    while(positiveInt > 1){
        sum = previous + previousTwo;
        previousTwo = previous;
        previous = sum;
        positiveInt--;
    }
    console.log("\n" + sum.toLocaleString('en') + ".");
}
