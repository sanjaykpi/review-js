//check whether a number is divisible with another number or not

let b = parseInt(prompt("enter the b value"));
let c = parseInt(prompt("enter the c value"));

if (b % c == 0) {
    console.log("b is divisible by c");
}
else {
    console.log("not divisible by c");
}