const scanner = require("readline-sync");
let valid = false;
console.log();
let posInt;
while(valid === false){
    posInt = Number(scanner.question("Positive integer: "));
    if( posInt < 1 || posInt > || Number.isNaN(posInt) == true){
        valid = false;
    } else {
        valid = true;
    }
}
