const scanner = require("readline-sync");
let posInt;
let valid = false;
let printThis = "\n"
console.log();
while(valid === false){
    posInt = Number(scanner.question("Positive integer: "));
    if(Number.isSafeInteger(posInt) == false || Number.isNaN(posInt) == true || posInt < 1 ){
    } else {
        valid = true;
    }
}
let copy = posInt;
let holder;
for(copy; copy >= posInt/2; copy--){
    if(posInt % copy == 0){
        holder = posInt / copy;
        if(copy == holder){
            printThis += holder + ", ";
        } else {
            printThis += holder + ", " + copy + ", ";
        }
    }
}
console.log(printThis);
