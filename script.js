console.log("Hello, World!");

// This is a comment

/* This comment
is on multiple lines */

/**
* This comment
* is used for
* documentation
*/

console.log(2*3);
console.log(2 === 2);
let myName = "Simon";
console.log(myName);
myName = "Ulysse";
console.log(myName);
const number23 = 23;
console.log(number23 == 24);

let myBudget = 0;
myBudget++;
console.log(myBudget); // affiche 1
myBudget += 2; 
console.log(myBudget); // affiche 3
myBudget = myBudget + 1;
console.log(myBudget); // affiche 4
myBudget--;
console.log(myBudget); // affiche 3
myBudget -= 2; 
console.log(myBudget); // affiche 1
myBudget = myBudget - 1;
console.log(myBudget); // affiche 0

const person = {
    name: "Bob", 
    age: 25, 
    sayHello: function(){
        console.log("Hello");
    }
}

console.log(person.sayHello());
// "Hello"

console.log(typeof person);
// "object"

const firstName = "Paul";

if (firstName === "Paul") {
  console.log("Welcome, Paul");
} else {
  console.log("Go away!");
}

const userName = prompt("What's your name?");
console.log(userName);

const userPasswordEntering = prompt("Enter your password");

let userPassword = "secret"

if (userPasswordEntering === userPassword) {
  console.log("Welcome! 👋")
} else {
  console.log("Wrong password! ❌")
}

const age = prompt("How old are you?");
console.log(typeof(age));
// String

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));
// Number

const user = prompt("What's your name?");

if(user === "Paul"){
	console.log("Hello, Paul!");
}
else if(user === "John"){
	console.log("Hello, John!");
}
else if(user === "Ringo"){
	console.log("Hello, Ringo!");
}
else{
	console.log("Sorry, not today...");
}

const userAge = prompt("How old are you ?");

if (userAge < 3) {
  console.log("Hello, Baby 🍼!");
}
else if (userAge < 18) {
  console.log("Hi! 👋");
}
else if (userAge < 100) {
  console.log("Greetings 🖖")
}
else {
  console.log("Wow... 😲")
}

let hisName = "";
if (hisName) {
  console.log("Hello you!");
  // This will never be run because "empty string" is evaluated as false
} else {
  console.log("you don't have a name");
}

let yourName = "";

if(yourName === "Paul" || yourName === "paul"){
	console.log("Welcome, Paul :)");
}
else if(!yourName){
	console.log("myName is empty: change its value ;)");
}
else{
	console.log("Go Away!");
}

const herName = prompt("What's your name?");

if(herName === "Paul"){
  const userPass = prompt("What's the secret code?");
	if(userPass === "secret"){
		console.log("Welcome, Paul!");
	}

	else{
		console.log("Wrong Credentials, sorry...");
	}

} 
else{
	console.log("Wrong Credentials... Sorry...");
}

herName === "Bob" ? console.log("Hello, Bob") : console.log("Go Away!");

function sayHello(firstName, lastName){
	console.log(`Hello ${firstName} ${lastName}, hope you're fine.`);
}

sayHello("Marlon", "Mars");

function login(name, password){
	if(name === "Bob" && password === "secret"){
		return true;
	}
	else{
		return false
	}
}

let UserName = prompt("What's your name?");
let UserPassword = prompt("What's your password?");

if(login(UserName, UserPassword)){
		console.log("Welcome!");
}
else{
		console.log("Wrong credentials...");
}