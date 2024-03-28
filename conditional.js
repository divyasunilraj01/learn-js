// conditional statements
// based on data
// if else

let num1 = 1;
let num2 = 8;
if (num1>num2) {
    console.log("num1 is greater than num2");
}
else {
    console.log("num1 is less than num2");
    console.log("ByeBye....");
}
// OR
 let num3 = 10;
 let num4 = 11;
 let result = num3>num4;
 if (result) {
     console.log("num3 is greater than num4");
 }
 else {
     console.log("num3 is less than num4");
 }

console.log("Bye....");

// Indentation is giving a space for code looking good

let num5 = 10;
let num6 = 7;
let num7 = 11;
if (num5>num6 && num5>num7) {
    console.log("num5 is greater than num6 and num7");
}
else if (num6>num5 && num6>num7) {
    console.log("num6 is greater than num5 and num7");
}
else {
    console.log("num7 is greater than num5 and num6");
}
console.log("Bye....");

