let mark1 = parseInt(prompt("enter your mark"));
let mark2 = parseInt(prompt("enter your mark"));
let mark3 = parseInt(prompt("enter your mark"));
let mark4 = parseInt(prompt("enter your mark"));

let total = mark1 + mark2 + mark3 + mark4;
console.log(total);
let avg = total / 4;
console.log(avg);

if (avg >= 80) {
    console.log("good grade");
}
else if (avg >= 35 && avg < 80) {
    console.log("pass grade");
}
else {
    console.log("fail grade");
}