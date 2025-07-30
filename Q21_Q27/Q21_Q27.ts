// Q:21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("--- Q:21 ---");
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
}
let person: Person = {
  firstName: "Aamna",
  lastName: "Iqbal",
  age: 30,
  occupation: "Software Developer",
};
console.log("Person Object:", person);

// Q:22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log("--- Q:22 ---");
let cities: string[] = ["Krachi", "Islamabad", "Lahore"];
// Intentionally causing an index error by accessing an out-of-bounds index
console.log("Accessing an out-of-bounds index: ", cities[5]);

// Correcting the error by accessing a valid index
console.log("Accessing a valid index: ", cities[1]);

/* Q:23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/

console.log("--- Q:23 ---");

//Test 1
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");

console.log(car == "subaru"); // True

//Test 2
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True

//Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != "toyota"); // True

//Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru"); // True

//Test 5
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == "SUBARU");

//Test 6
console.log("Is car.length !== 6? I predict False.");
console.log(car.length !== 6); // False

//Test 7
console.log("Is car.length < 6? I predict False.");
console.log(car.length < 6); // False

//Test 8
console.log("Is car.indexOf('baf') !== -1? I predict False.");
console.log(car.indexOf("baf") !== -1); // False

///Test 9
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === "Subaru"); // False

//Test 10
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === "SUBARU"); // False

/* Q:24More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

// • Tests for equality and inequality with strings

console.log("--- Q:24 ---");

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); //False

console.log("Is car === 'toyota'? I predict False.");
console.log(car === "toyota"); //False

// • Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == "subaru"); //True

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is car.length === 6? I predict True.");
console.log(car.length === 6); // True
console.log("Is car.length !== 6? I predict False.");
console.log(car.length !== 6); // False
console.log("Is car.length > 5? I predict True.");
console.log(car.length > 5); //True
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7); //True
console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6); //True
console.log("Is car.length <= 6? I predict True.");
console.log(car.length <= 6); //True

// • Tests using "and" and "or" operators
console.log("Is car.length === 6 && car === 'subaru'? I predict True.");
console.log(car.length === 6 && car === "subaru"); // True

console.log("Is car.indexOf('f')!==-1 || car !== 'toyota'? I predict True.");
console.log(car.indexOf("f") !== -1 || car !== "toyota"); // True

// • Test whether an item is in a array
let fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.indexOf("banana") !== -1); // True

// • Test whether an item is not in a array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(fruits.indexOf("grape") === -1); // True

/* Q:25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/

console.log("--------Q25: Version 1--------");
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points!");
}
// Version that fails
console.log("--------Q25: Version 2 (Fails)--------");
alien_color = "yellow";
if (alien_color === "green") {
  console.log("You just earned 5 points!");
}

/* Q:26 : Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */

console.log("--------Q26--------");

function checkAlienColor(alien_color: string) {
  if (alien_color === "green") {
    console.log("You just earned 5 points for shooting the alien.");
  } else {
    console.log("You just earned 10 points for shooting the alien.");
  }
}
alien_color = "green";
checkAlienColor(alien_color);
alien_color = "yellow";
checkAlienColor(alien_color);

/* Q:27 : Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

console.log("--------Q27--------");

function checkColor(alien_color: string) {
  if (alien_color === "green") {
    console.log("You just earned 5 points for shooting the alien.");
  } else if (alien_color === "yellow") {
    console.log("You just earned 10 points for shooting the alien.");
  } else if (alien_color === "red") {
    console.log("You just earned 15 points for shooting the alien.");
  } else {
    console.log("You earned no points.");
  }
}
alien_color = "green";
checkColor(alien_color);
alien_color = "yellow";
checkColor(alien_color);
alien_color = "red";
checkColor(alien_color);
