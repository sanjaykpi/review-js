let a = parseInt(prompt("enter your a value"));
let b = parseInt(prompt("enter your b value"));
let o = prompt("enter your op"), c;

switch (a, b, o) {
    case "+":
        c = a + b;
        console.log("your answer is " + c);
        break;
    case "-":
        c = a - b;
        console.log("your answer is " + c);
        break;
    case "*":
        c = a * b;
        console.log("your answer is " + c);
        break;
    case "/":
        c = a / b;
        console.log("your answer is " + c);
        break;
    default:
        console.log("invalid");
}