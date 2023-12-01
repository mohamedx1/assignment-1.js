

// ------------------------------- program 1 ---------------------------------



// var age = +window.prompt("inter your age");

// document.getElementById('demo1').innerHTML=(age);



// ------------------------------- program 2 ---------------------------------


// var Num = +window.prompt("inter number");

// if (Num % 3 == 0 && Num % 4 == 0) {
//     document.getElementById('demo1').innerHTML=("yes this number number can divide by 3 and 4");
// }
// else {
//     document.getElementById('demo1').innerHTML=("no this number number can divide by 3 and 4");
// }



// ------------------------------- program 3 ---------------------------------


// var number1 = +window.prompt("inter number1");
// var number2 = +window.prompt("inter number2");

// if (number1 > number2) {
//     document.getElementById('demo1').innerHTML=(number1);
// }
// else if (number2 > number1) {
//     document.getElementById('demo1').innerHTML=(number2);
// }
// else {
//     document.getElementById('demo1').innerHTML=("this numbers is equal");
// }

// ------------------------------- program 4 ---------------------------------


// var number = +window.prompt("inter number");

// if (number >= 0) {
//     document.getElementById('demo1').innerHTML=("positive");
// }
// else if (number < 0) {
//     document.getElementById('demo1').innerHTML=("negative");
// }

// ------------------------------- program 5 ---------------------------------

// var number1 = +window.prompt("inter first number");
// var number2 = +window.prompt("inter sceound number");
// var number3 = +window.prompt("inter last number");
// var max = number1;
// var min = number1;

// if (number2 > max) {
//     max = number2;
// }
// if (number2 < min) {
//     min = number2;
// }
// if (number3 > max) {
//     max = number3;
// }
// if (number3 < min) {
//     min = number3;
// }

// document.getElementById('demo1').innerHTML = (`max is : ${max} ,  min is:  ${min}`);

// ------------------------------- program 6 ---------------------------------

// var num = +window.prompt("insert number");
// var result = (num % 2)
// if (result == 0) {
//     document.getElementById('demo1').innerHTML=("even");
// } else {
//     document.getElementById('demo1').innerHTML=("odd");
// }

// ------------------------------- program 7 ---------------------------------

// var character = window.prompt("insert character");

// if (character == "a" || character == "e" || character == "l" || character == "o" ||character == "u") {
//     document.getElementById('demo1').innerHTML=("vowel");
// } else {
//     document.getElementById('demo1').innerHTML=("Consonant")
// }

// ------------------------------- program 8 ---------------------------------

// var number = +window.prompt("insert number");
// var x = "";
// for (i = 1; number >= i; i++) {
//     x += i + " ";
//     document.getElementById('demo1').innerHTML = (x);
// }

// ------------------------------- program 9 ---------------------------------

// var number = +window.prompt("insert number");
// var x = "";
// for (i = number; i <= number * 12; i += number) {
//     x += i + " ,";
//     document.getElementById('demo1').innerHTML = (x);
// }

// ------------------------------- program 10 ---------------------------------

// var even = window.prompt("inter number");
// var x = "";
// for (i = 0; i <= even; i += 2){
//     x += i + ", ";
//     document.getElementById('demo1').innerHTML=(x);
// }

// ------------------------------- program 11 ---------------------------------


// var number1 = window.prompt("inter number");
// var number2 = window.prompt("inter number");

// document.getElementById('demo1').innerHTML=(number1**number2);

// ------------------------------- program 12 ---------------------------------

// var sub1 = +window.prompt("inter your marks in sub1");
// var sub2 = +window.prompt("inter your marks in sub2");
// var sub3 = +window.prompt("inter your marks in sub3");
// var sub4 = +window.prompt("inter your marks in sub4");
// var sub5 = +window.prompt("inter your marks in sub5");

// var fullMarks = 500;
// var totalMarks = (sub1 + sub2 + sub3 + sub4 + sub5)
// var percentage = (totalMarks / fullMarks) * 100
// var average = (totalMarks / 5)

// document.getElementById('demo1').innerHTML=(`Total Marks = ${totalMarks}`);
// document.getElementById('demo2').innerHTML=(`Average Marks = ${average}`);
// document.getElementById('demo3').innerHTML=(`percentage = ${percentage}%`);

// ------------------------------- program 13 ---------------------------------

// var month = window.prompt("inseret month number")

// if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
//     document.getElementById('demo1').innerHTML=(`Day Month: 30`);
// } else if (month > 12) {
//     document.getElementById('demo1').innerHTML = (`wrong month number try agin`);
// } else {
//     document.getElementById('demo1').innerHTML=(`Day Month: 31`);
// }

// ------------------------------- program 14 ---------------------------------

// var physics = +window.prompt("inter your marks in physics");
// var chemistry = +window.prompt("inter your marks in chemistry");
// var biology = +window.prompt("inter your marks in biology");
// var mathematics = +window.prompt("inter your marks in mathematics");
// var computer = +window.prompt("inter your marks in computer");

// var fullMarks = 500;
// var totalMarks = (physics + chemistry + biology + mathematics +computer);
// var percentage = (totalMarks / fullMarks) * 100;
// var grad = "";
// if (percentage >= 90 ) {
//     grad = "A";
// } else if (percentage >= 80) {
//     grad = "B";
// } else if (percentage >= 70) {
//     grad = "C";
// } else if (percentage >= 80) {
//     grad = "D";
// } else if (percentage >= 40) {
//     grad = "E";
// } else if (percentage < 40) {
//     grad = "F";
// }

// document.getElementById('demo1').innerHTML=(`Your percentage is ${percentage}%  <br> your grade is(${grad})`);

// ------------------------------- program 15 ---------------------------------

// var month = +window.prompt("inseret month number");

// switch (month) {
//     case 2:
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.getElementById('demo1').innerHTML = (`Day Month: 30`);
//         break;
//     default:
//         document.getElementById('demo1').innerHTML = (`Day Month: 31`);
//         break
// }


// ------------------------------- program 16 ---------------------------------

// var character = window.prompt("insert character");

// switch (character) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "l":
//     case "L":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         document.getElementById('demo1').innerHTML = (`vowel`);
//         break;
//     default:
//         document.getElementById('demo1').innerHTML = (`Consonant`);
//         break
// }

// ------------------------------- program 17 ---------------------------------


// var num1= +window.prompt("inter number1");
// var num2 = +window.prompt("inter number2");
// switch (true) {
//     case num2 > num1:
//         document.getElementById('demo1').innerHTML = (`max is :${ num2 } min is ${ num1 }`);
//         break
//     case num1 > num2:
//         document.getElementById('demo1').innerHTML = (`max is :${ num1 } min is ${ num2 }`);
// }

// ------------------------------- program 18 ---------------------------------

// var num= +window.prompt("inter number");

// switch (true) {
//     case num % 2 == 0:
//         document.getElementById('demo1').innerHTML = ("the number is even");
//         break
//     default:
//         document.getElementById('demo1').innerHTML = ("the number is odd");
//         break
// }

// ------------------------------- program 19 ---------------------------------

// var num= +window.prompt("inter number");

// switch (true) {
//     case num > 0:
//         document.getElementById('demo1').innerHTML = ("positive");
//         break
//     case num < 0:
//         document.getElementById('demo1').innerHTML = ("negative");
//         break
//     case num == 0:
//         document.getElementById('demo1').innerHTML = ("Zero");
// }

// ------------------------------- program 20 ---------------------------------


// var firstNum= +window.prompt("inter first number");
// var character= window.prompt("insert character to calculate");
// var secondNum= +window.prompt("inter second number");

// switch (character) {
//     case "+":
//         document.getElementById('demo1').innerHTML = (`Result is :${ firstNum + secondNum }`);
//         break
//     case "-":
//         document.getElementById('demo1').innerHTML = (`Result is :${ firstNum - secondNum }`);
//         break
//     case "*":
//         document.getElementById('demo1').innerHTML = (`Result is :${ firstNum * secondNum }`);
//         break
//     case "/":
//         document.getElementById('demo1').innerHTML = (`Result is :${ firstNum + secondNum }`);
//         break
//     case "%":
//         document.getElementById('demo1').innerHTML = (`Result is :${firstNum % secondNum}`);
//         break
//     case "^":
//         document.getElementById('demo1').innerHTML = (`Result is :${firstNum ** secondNum}`);
// }