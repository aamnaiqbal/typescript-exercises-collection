// Q1: Install Node.js, TypeScript and VS Code on your computer.

//Q2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

console.log("---------Q2---------");
let personName1: string = "Aamna";
console.log(`Hello ${personName1}, would you like to learn some Python today?`);

//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log("---------Q3---------");
let personName2: string = "atOoFa";
console.log("Upper case: " + personName2.toUpperCase());
console.log("Lower case: " + personName2.toLowerCase());
console.log(
  "Title case: " +
    (personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase())
);

//Q4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log("---------Q4---------");
let author: string = "Albert Einstein";
let quote: string =
  "A person who never made a mistake never tried anything new.";
console.log(`${author} once said, "${quote}"`);

//Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

console.log("---------Q5---------");
let famous_person: string = "Albert Einstein";
let _quote: string =
  "A person who never made a mistake never tried anything new.";
let message: string = `${famous_person} once said, "${_quote}"`;
console.log(message);

//Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("---------Q6----------");
let _personName: string = "  \tAamna   \n  ";
console.log("Name after striping whitespace: " + _personName.trim());

//Q7 & Q8 : Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("---------Q7---------");
console.log(5 + 3);
console.log(15 - 7);
console.log(4 * 2);
console.log(16 / 2);

//Q9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("---------Q9---------");
const favoriteNumber: number = 6;
console.log(`My favorite number is ${favoriteNumber}.`);

//Q10: Adding Comments: Choose two of the programs you’ve written in this chapter, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the date at the top of each program file. Then write one sentence describing what the program does.
console.log("---------Q10---------");
// This program prints my favorite number.
console.log(`My favorite number is ${favoriteNumber}.`);
// This program performs basic arithmetic operations to result in the number 8.
console.log(5 + 3);
console.log(15 - 7);
console.log(4 * 2);
console.log(16 / 2);

//Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("---------Q11---------");
let names: string[] = ["Zainab", "Savera", "Maira"];
console.log("Friends' names:");
for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("--------Q12--------");
for (let i: number = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}, how are you doing?`);
}

//Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log("--------Q13--------");
let transportationModes: string[] = [
  "Honda motorcycle",
  "Bugatti",
  "Porsche 911",
];
for (let i: number = 0; i < transportationModes.length; i++) {
  console.log(`I would like to own a ${transportationModes[i]}.`);
}

//Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

console.log("--------Q14--------");
let guestList: string[] = [
  "Zanab",
  "Savera",
  "Simrah",
  "Muneer",
  "Arham",
  "Maira",
];
for (let i: number = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, I would like to invite you to dinner.`);
}

/*Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

console.log("--------Q15--------");

//stating the name of the guest who can’t make it.
let guestWhoCannotMake: string = "Muneer";
console.log(`${guestWhoCannotMake} can't make it to dinner.`);

// replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest: string = "Shehnila";
let guestIndexToReplace = guestList.indexOf(guestWhoCannotMake);
if (guestIndexToReplace !== -1) {
  guestList[guestIndexToReplace] = newGuest;
}

//Print a second set of invitation messages
console.log("Updated invitations:");
for (let i: number = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, I would like to invite you to dinner.`);
}

//Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("--------Q16--------");
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Great news! I found a bigger dinner table.");

// • Add one new guest to the beginning of your array.
let newGuestAtBeginning: string = "Ali";
guestList.unshift(newGuestAtBeginning);

// • Add one new guest to the middle of your array.
let newGuestInMiddle: string = "Sania";
guestList.splice(Math.floor(guestList.length / 2), 0, newGuestInMiddle);

// • add one new guest to the end of your list.
let newGuestAtEnd: string = "Arooba";
guestList.push(newGuestAtEnd);

// • Print a new set of invitation messages, one for each person in your list.
for (let i: number = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, I would like to invite you to dinner. It is going to be a grand event with more guests!`
  );
}

// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("--------Q17--------");
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
for (let i: number = 0; i < guestList.length; i++) {
  console.log(
    `Sorry ${guestList[i]}, I can invite only two people to dinner due to space constraints.`
  );
}
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (let i: number = guestList.length; i > 2; i--) {
  let removedGuest: string = guestList.pop() || "";
  console.log(
    `Sorry ${removedGuest}, I can't invite you to dinner due to space constraints.`
  );
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i: number = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner.`);
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (guestList.length > 0) {
  guestList.pop();
}
console.log("Final empty guest list:", guestList);

//Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("--------Q18--------");

let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Canada", "Spain"];
// • Print your array in its original order.
console.log(`Original order of places to visit: [${placesToVisit}]`);
// • Print your array in alphabetical order without modifying the actual list.
console.log(
  `Alphabetical order of places to visit: [${placesToVisit.slice().sort()}]`
);

// • Show that your array is still in its original order by printing it.
console.log(`Original order of places to visit: [${placesToVisit}]`);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(
  `Reverse alphabetical order of places to visit: [${placesToVisit
    .slice()
    .sort()
    .reverse()}]`
);

// • Show that your array is still in its original order by printing it again.
console.log(`Original order of places to visit: [${placesToVisit}]`);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reversed order of places to visit: [${placesToVisit.reverse()}]`);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(
  `Back to original order of places to visit: [${placesToVisit.reverse()}]`
);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log(`Alphabetical order (modified original): [${placesToVisit}]`);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort().reverse();
console.log(
  `Reverse alphabetical order (modified original): [${placesToVisit}]`
);

//Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("--------Q19--------");

// Let's reuse the guest list before it was emptied

guestList = [
  "Ali",
  "Zainab",
  "Savera",
  "Sania",
  "Simrah",
  "Shehnila",
  "Arham",
  "Maira",
  "Arooba",
];
console.log(`Number of people invited to dinner: ${guestList.length}`);

//Q20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you'd like. Write a program that creates a list containing these items.

console.log("--------Q20--------");

// Creating a list of programming languages
let planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
for (let i: number = 0; i < planets.length; i++) {
  console.log(`${i + 1}. ${planets[i]}`);
}
