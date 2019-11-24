const scanner = require("readline-sync");
let valid = false;
let height;
let stringer;
console.log(" ");
while (valid == false) {
    stringer = scanner.question("Height: ");
    height = Number(stringer);
    if (height >= 1 && height <= 24 ) {
        if (Number.isNaN(height) == true || Number.isInteger(height) == false || stringer.includes(".")) {
        } else {
            valid = true;
        }
    }
}
let row = "##";
let printThis;
let space;
const maxHeight = height  + 1;
let quanityOfSpaces;
console.log();
while (height > 0 ) {
    quanityOfSpaces = "";
    space = maxHeight - row.length;
    while (space > 0) {
        quanityOfSpaces += " ";
        space--;
    }
    printThis = quanityOfSpaces + row;
    let reverse = row + quanityOfSpaces
    console.log(printThis + "  "  + reverse);
    height--;
    row += "#";
}
console.log(" ");
