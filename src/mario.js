const scanner = require("readline-sync");
let valid = false;
let height;
console.log("");
while(valid == false){
    height = Number(scanner.question("Height: "));
    if (height >= 1 && height <= 24 ){
        if (Number.isNaN(height) == true || Number.isInteger(height) == false){
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
while(height > 0 ){
    quanityOfSpaces = "";
    space = maxHeight - row.length;
    while(space > 0){
        quanityOfSpaces += " ";
        space--;
    }
    printThis = quanityOfSpaces + row;
    console.log(printThis);
    height--;
    row += "#";
}
