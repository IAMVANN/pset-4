const scanner = require("readline-sync");
let posInt;
let valid = false;
let stringer;
let printThis = "\n"
console.log(" ");
while (valid === false) {
    stringer = scanner.question("Positive integer: ");
    posInt = Number(stringer);
    if (Number.isSafeInteger(posInt) == false || Number.isNaN(posInt) == true || posInt < 1 ||
      stringer.includes(".") == true ) {
    } else {
        valid = true;
    }
}
let copy = posInt;
let holder;
for (copy; copy >= Math.sqrt(posInt); copy--) {
    if (posInt % copy == 0) {
        holder = posInt / copy;
        if (copy == holder) {
            printThis +=  ", " + holder;
        } else if (copy == posInt) {
            printThis += holder + ", " + copy ;
        } else {
            printThis +=  ", " + holder + ", " + copy ;
        }
    }
}
if(posInt == "1"){
    console.log("\n1.")
} else{
    console.log(printThis + ".");
}
console.log(" ");
