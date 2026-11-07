// let a = 10;
// console.log(a);
// a = 50;

// var b = 20;

// b = 30;

// const pie = 3.14;
// // pie = 10;

// console.log(a);
// console.log(b);
// console.log(pie);

// // let greeting = "Good Morning";
// // document.getElementById("par").innerHTML = greeting;

// let str = "This Is Text";
// str = "Second Value";
// let price = 1000.25;
// price = 99.9;
// let isprime = true;
// isprime = false;
// let num = 10;
// num = 45;
// let zero = "null";
// zero = 1;
// let notFound = undefined;
// notFound = "Found";

// let und;
// console.log(und);

// console.log("This is String", str);
// console.log("This is Float or Decimal", price);
// console.log("This is Boolean", isprime);
// console.log("This is number", num);
// console.log("This is Null", zero);
// console.log("This is Undefined", notFound);

// let num1 = 10;
// num1 += 20;
// let num2 = 20;
// let num3 = "40";
// let firstname = "Sharan";
// let lastname = "Devadiga";
// let fullname = firstname + " " + lastname;
// console.log(num1);

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 + num3);

// console.log(fullname);

// let num1 = 10;
// let num2 = 20;
// let text;

// if (num1 !== num2) {
//   text = "True";
// } else {
//   text = "False";
// }
// console.log(text);

// let email;
// email = "ghshvsvh";
// let password;
// password = "hjbshdsh";
// email = "test@gmmaih";

// let result = !email ? "Error" : "Success";
// console.log(result);

// if (!email || !password) {
//   console.log(" Please Fill Required Fields");
// } else {
//   console.log("Success");
// }

// let num = [10, 20, 30, 40];

// // let num2 = [50, 60, 70, 80];
// let element;
// for (let i = 0; i < num.length; i++) {
//   element = num[i];
//   //   console.log(element);
// }
// console.log(num[2]);

// console.log("Before Join Method", num);

// let joinMethod = num.join(",");
// console.log("After Join Method", joinMethod);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("Before pop", fruits);

// // fruits.pop();
// console.log("Removed:", fruits.pop());

// console.log("After pop", fruits);
// fruits.pop();
// console.log("After pop", fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("Before push", fruits);

// // fruits.push();
// console.log("Added:", fruits.push("XYZ"));

// console.log("After push", fruits);
// console.log("Added:", fruits.push("ABC"));
// console.log("After push", fruits);

// let person = {
//   name: "Sharan",
//   age: 10,
//   address: "Moodubidri",
//   gender: "male",
//   skills: ["Java", "Javascript", "php", "Ruby"],
//   grade: 9.1,
// };
// console.log(person);
// console.log(person.name, person.age);
// console.log(person.skills);
// console.log(person.skills[3]);
// // console.log(person.name, person.age);

// let date = new Date();
// console.log(date);

// const specific = new Date(2026, 5, 15, 10, 30, 0);
// console.log(specific);

//function without parms and argument
// function sum() {
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// }
// sum();

// function with parms and argument
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 20);

// function with parms and without argument
// function sum(a = 10, b = 20) {
//   console.log(a + b);
// }
// sum();

// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(10, 40);

let str = "Hello World";

console.log("Before replace", str);

let replaced = str.replace("World", "Sharan");
console.log("After replace", replaced);

let slice = str.slice(0, 2);
console.log("Slice:", slice);

let search = str.search("World");
console.log("search:", search);

let split = str.split("Hello");
console.log("split:", split);
