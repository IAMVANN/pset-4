const scanner = require("readline-sync");
let valid = false;
let num;
let stringer;
let length;
let adder = 0;
let multiplier = 0;
let sum;
let remaindierVar;
console.log("");
let doubleDigitsHolder;
while(valid == false){
    stringer = scanner.question("Number: ");
    num = Number(stringer);
    if(num >= 1 && num <= 9999999999999999 && Number.isNaN(num) == false && Number.isInteger(num) == true &&
      stringer.includes(".") == false){
        valid = true;
    }
}

length = stringer.length;
let maxLength = length;
if(length % 2 == 0){
    remaindierVar = 0; //this does it so that the second to last number in an even number is found
} else {
    remaindierVar = 1; // THIS MAKRES IT SO THAT THE SECOND TO LAST NUMBER in AN ODD NUMBER IS FOUND.
}
while(length > 0){
    if(length % 2 == remaindierVar){
        adder = adder + Number(stringer.charAt(length - 1));
    } else{
        if(Number(stringer.charAt(length - 1)) * 2 >= 10){
            doubleDigitsHolder =  Number(stringer.charAt(length - 1)) * 2;
            multiplier = multiplier + Number(String(doubleDigitsHolder).charAt(0)) +
              Number(String(doubleDigitsHolder).charAt(1));
        } else{
            multiplier = multiplier + Number(stringer.charAt(length - 1)) * 2;
        }
    }

    length--;

}
sum = adder + multiplier;
if(sum % 10 != 0){
    console.log("\nInvalid");
} else{
    if(stringer.startsWith("34") == true || stringer.startsWith("37") == true){
        if(maxLength == 15){
            console.log("\nAmex.")
        } else{
            console.log("\nInvalid.1");
        }

    } else if(stringer.startsWith("51") == true || stringer.startsWith("52") == true ||
      stringer.startsWith("53") == true || stringer.startsWith("54") == true || stringer.startsWith("55") == true){
        if(maxLength == 16){
            console.log("\nMastercard.");
        } else{
            console.log("\nInvalid.1");
        }
    } else if(stringer.startsWith("4") == true){
        if(maxLength == 13 || maxLength == 16){
            console.log("\nVisa.");
        } else{
            console.log("\nInvalid.1");
        }
    } else{
        console.log("\nInvalid.")
    }

}
