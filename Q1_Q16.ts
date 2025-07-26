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
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("--------Q12--------");
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}, how are you doing?`);
}

//Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

console.log("--------Q13--------");
let transportationModes: string[] = [
  "Honda motorcycle",
  "Bugatti",
  "Porsche 911",
];
for (let i = 0; i < transportationModes.length; i++) {
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
for (let i = 0; i < guestList.length; i++) {
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
for (let i = 0; i < guestList.length; i++) {
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
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]}, I would like to invite you to dinner. It is going to be a grand event with more guests!`
  );
}
