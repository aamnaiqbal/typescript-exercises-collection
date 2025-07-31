# TypeScript Programming Exercises

This repository contains TypeScript solutions for 43 fundamental programming exercises covering variables, strings, arrays, objects, conditional logic, and functions.

## Prerequisites

- Node.js installed on your computer
- TypeScript installed globally (`npm install -g typescript`)
- VS Code (recommended IDE)

## File Structure

```
typescript-exercises-collection/
├── Q1_Q20/
│   └── Q1_Q20.ts          # Basic exercises (Q1-Q20)
├── Q21_Q27/
│   └── Q21_Q27.ts         # Objects & conditionals (Q21-Q27)
├── Q28_Q35/
│   └── Q28_Q35.ts         # Advanced conditionals & loops (Q28-Q35)
├── Q36_Q39/
│   └── Q36_Q39.ts         # Functions (Q36-Q39)
├── Q40_Q43/
│   └── Q40_Q43.ts         # Advanced functions & arrays (Q40-Q43)
└── README.md              # This file

```

## How to Run

## How to Run

## How to Run

### Compile and Run Q1-Q20

```bash
# Navigate to Q1_Q20 folder
cd Q1_Q20

# Compile TypeScript to JavaScript
tsc Q1_Q20.ts

# Run the compiled JavaScript
node Q1_Q20.js
```

### Compile and Run Q21-Q27

```bash
# Navigate to Q21_Q27 folder
cd Q21_Q27

# Compile TypeScript to JavaScript
tsc Q21_Q27.ts

# Run the compiled JavaScript
node Q21_Q27.js
```

### Compile and Run Q28-Q35

```bash
# Navigate to Q28_Q35 folder
cd Q28_Q35

# Compile TypeScript to JavaScript
tsc Q28_Q35.ts

# Run the compiled JavaScript
node Q28_Q35.js
```

### Compile and Run Q36-Q39

```bash
# Navigate to Q36_Q39 folder
cd Q36_Q39

# Compile TypeScript to JavaScript
tsc Q36_Q39.ts

# Run the compiled JavaScript
node Q36_Q39.js
```

### Compile and Run Q40-Q43

```bash
# Navigate to Q40_Q43 folder
cd Q40_Q43

# Compile TypeScript to JavaScript
tsc Q40_Q43.ts

# Run the compiled JavaScript
node Q40_Q43.js
```

## Expected Output

The program will display output for each of the 43 exercise sections, marked with separators like:

**From Q1-Q20:**

```
---------Q2---------
Hello Aamna, would you like to learn some Python today?

---------Q3---------
Upper case: ATOOFA
Lower case: atoofa
Title case: Atoofa

--------Q20--------
1. Mercury
2. Venus
3. Earth
4. Mars
5. Jupiter
6. Saturn
7. Uranus
8. Neptune
```

**From Q21-Q27:**

```
--- Q:21 ---
Person Object: { firstName: 'Aamna', lastName: 'Iqbal', age: 30, occupation: 'Software Developer' }

--- Q:22 ---
Accessing an out-of-bounds index: undefined
Accessing a valid index: Islamabad

--- Q:23 ---
Is car == 'subaru'? I predict True.
true
```

**From Q28-Q35:**

```
---------Q28----------
The person is an adult.

---------Q29----------
You really like apples!
You really like bananas!
You really like mangoes!

---------Q34----------
I love Margherita pizza!
I love Pepperoni pizza!
I love Veggie pizza!
```

**From Q36-Q39:**

```
---------Q36----------
You ordered a Large shirt with the message "Hello World!"

---------Q37----------
You ordered a Large shirt with the message "I love TypeScript"

---------Q38----------
Karachi is in Pakistan.

---------Q39----------
Karachi, Pakistan
```

**From Q40-Q43:**

```
-----Q:40-----
{ artist: 'Artist 1', title: 'Album 1' }
{ artist: 'Artist 2', title: 'Album 2', tracks: 10 }
{ artist: 'Artist 3', title: 'Album 3', tracks: 8 }

-----Q:41-----
Harry Houdini
David Blaine
Criss Angel
Derren Brown

-----Q:42-----
Great Harry Houdini
Great David Blaine
Great Criss Angel
Great Derren Brown

-----Q:43-----
Original Magicians:
Harry Houdini
David Blaine
Criss Angel
Derren Brown

Great Magicians:
the Great Harry Houdini
the Great David Blaine
the Great Criss Angel
the Great Derren Brown
```

## Learning Objectives

By completing these 43 exercises, you will learn:

- TypeScript syntax and type annotations
- Variable declarations and string manipulation
- Array creation and manipulation methods
- Object creation and interface definitions
- Control structures (loops, conditionals)
- Template literals and string interpolation
- Advanced array operations (sorting, reversing, slicing)
- Conditional logic and boolean operations
- Function definitions and parameter handling
- Default parameters and return values
- Error handling and debugging techniques
- Basic program organization and commenting
- Problem-solving with data structures

## Exercises Overview

### **Q1**: Environment Setup

- Install Node.js, TypeScript, and VS Code

### **Q2**: Personal Message

- Store a person's name and print a personalized message

### **Q3**: Name Cases

- Display a name in uppercase, lowercase, and title case

### **Q4**: Famous Quote

- Print a quote with proper attribution

### **Q5**: Famous Quote 2

- Store quote and author in variables, compose a message

### **Q6**: Stripping Names

- Handle whitespace characters (`\t`, `\n`) and use `trim()` method

### **Q7**: Number Eight

- Perform arithmetic operations (addition, subtraction, multiplication, division) that result in 8

### **Q8**: Continuation of Q7

### **Q9**: Favorite Number

- Store and display your favorite number

### **Q10**: Adding Comments

- Add meaningful comments to existing code

### **Q11**: Names Array

- Store friends' names in an array and print each name

### **Q12**: Greetings

- Print personalized greetings for each friend

### **Q13**: Your Own Array

- Create an array of transportation modes and print statements about them

### **Q14**: Guest List

- Create a dinner invitation list and send invitations

### **Q15**: Changing Guest List

- Handle guest cancellations and replacements using array methods

### **Q16**: More Guests

- Expand the guest list using various array manipulation methods:
  - `unshift()` - Add to beginning
  - `splice()` - Add to middle
  - `push()` - Add to end

### **Q17**: Shrinking Guest List

- Handle space constraints by removing guests from the list
- Use `pop()` method to remove guests one at a time
- Print apology messages to removed guests

### **Q18**: Seeing the World

- Create a list of places to visit
- Practice array sorting and reversing without modifying original array
- Demonstrate `.slice()`, `.sort()`, and `.reverse()` methods

### **Q19**: Dinner Guests

- Calculate and display the number of dinner guests
- Use array `.length` property to count elements

### **Q20**: Custom Array

- Create your own array of items (planets, countries, languages, etc.)
- Display array contents in a formatted list

## Advanced Exercises (Q21-Q27)

### **Q21**: Objects and Interfaces

- Create TypeScript objects with interface definitions
- Store complex data structures with multiple properties

### **Q22**: Intentional Error

- Practice debugging by creating and fixing array index errors
- Learn about bounds checking and error handling

### **Q23**: Conditional Tests

- Write conditional tests with predictions
- Practice boolean logic and comparison operators
- Create at least 10 tests (5 true, 5 false)

### **Q24**: More Conditional Tests

- Advanced conditional testing with various operators
- Test equality, inequality, logical operators
- Work with different data types in conditions

### **Q25**: Alien Colors #1

- Introduction to if statements
- Basic conditional logic with game scenarios
- Understanding program flow control

### **Q26**: Alien Colors #2

- Implement if-else chains
- Handle multiple conditions
- Practice decision-making logic

### **Q27**: Alien Colors #3

- Complex if-else-if chains
- Multiple conditional branches
- Advanced program flow control

## More Advanced Exercises (Q28-Q35)

### **Q28**: Stages of Life

- Complex if-else-if chains for age categorization
- Multiple conditional ranges
- Real-world conditional logic examples

### **Q29**: Favorite Fruit

- Array searching with conditional statements
- Using `indexOf()` method for element checking
- Independent if statements vs. if-else chains

### **Q30**: Hello Admin

- User authentication simulation
- Special handling for admin users
- Loop-based user greeting system

### **Q31**: No Users

- Empty array validation
- Defensive programming practices
- Conditional execution based on array length

### **Q32**: Checking Usernames

- Username uniqueness validation
- Array comparison and duplicate detection
- Simulating real-world web application logic

### **Q33**: Ordinal Numbers

- Number formatting and conditional text
- Special cases in programming logic
- String manipulation based on numeric values

### **Q34**: Pizzas

- Basic for loop implementation
- Array iteration and display
- Simple list processing

### **Q35**: Animals

- Enhanced for loop with additional statements
- Multiple output formats for same data
- Summary statements after processing

## Function-Based Exercises (Q36-Q39)

### **Q36**: T-Shirt Function

- Basic function definition and parameters
- Function calls with different arguments
- Simple string formatting in functions

### **Q37**: Large Shirts with Defaults

- Default parameter values
- Function overloading concepts
- Flexible function design

### **Q38**: Cities Function

- Functions with default country parameter
- Geographic data processing
- Parameter flexibility and defaults

### **Q39**: City Country Function

- Functions with return values
- String formatting and return statements
- Function composition and reusability

## Advanced Function Exercises (Q40-Q43)

### **Q40**: Album Function

- Object creation with interfaces
- Optional parameters in functions
- Creating functions that return complex objects
- Handling conditional object properties

### **Q41**: Magicians Array

- Array iteration with for-of loops
- Function parameters for array processing
- Separation of data and display logic
- Reusable display functions

### **Q42**: Great Magicians (Modifying Original)

- Array modification in-place
- Destructive array operations
- Understanding reference vs. value semantics
- Side effects in functions

### **Q43**: Unchanged Magicians (Preserving Original)

- Non-destructive array operations
- Creating copies with spread operator (`...`)
- Pure functions vs. functions with side effects
- Comparing original and modified data

## Key Concepts Demonstrated

### **Variables & Data Types**

```typescript
let personName: string = "Aamna";
const favoriteNumber: number = 6;
let guestList: string[] = ["Ali", "Sara", "Ahmed"];
```

### **Objects & Interfaces**

```typescript
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
```

### **String Manipulation**

```typescript
personName.toUpperCase();
personName.toLowerCase();
personName.trim();
```

### **Array Methods**

```typescript
guestList.push("NewGuest"); // Add to end
guestList.unshift("NewGuest"); // Add to beginning
guestList.splice(2, 0, "NewGuest"); // Insert at index 2
guestList.indexOf("GuestName"); // Find index of element
guestList.pop(); // Remove last element
guestList.sort(); // Sort alphabetically
guestList.reverse(); // Reverse array order
array.slice().sort(); // Sort without modifying original
```

### **Functions**

```typescript
// Basic function
function make_shirt(size: string, message: string): void {
  console.log(`You ordered a ${size} shirt with the message "${message}"`);
}

// Function with default parameters
function make_shirt_default(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`You ordered a ${size} shirt with the message "${message}"`);
}

// Function with return value
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
```

### **Advanced Functions with Objects (Q40-Q43)**

```typescript
// Interface definition for complex objects
interface Album {
    artist: string;
    title: string;
    tracks?: number;  // Optional property
}

// Function with optional parameters
const make_album = (artist_name: string, album_title: string, tracks: number = 0): Album => {
    const album: Album = {
        artist: artist_name,
        title: album_title
    }
    if(tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

// Array processing functions
const show_magicians = (magicians: string[]): void => {
    for(const magician of magicians) {
        console.log(magician);
    }
}

// Destructive array modification (modifies original)
const make_great = (magicians: string[]): void => {
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = `Great ${magicians[i]}`;
    }
}

// Non-destructive array processing (preserves original)
function make_great_magicians(magicianNames: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const name of magicianNames) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}

// Using spread operator to create array copies
const greatMagicians = make_great_magicians([...magicians_names]);
```

### **Advanced Array Searching**

```typescript
// Using indexOf() for element checking (ES5 compatible)
if (favourite_fruits.indexOf("apple") !== -1) {
  console.log("You really like apples!");
}

// Array length validation
if (usernames.length === 0) {
  console.log("We need to find some users!");
}
```

### **Loop Variations**

```typescript
// Enhanced for loop with conditional logic
for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}
```

### **Template Literals**

```typescript
console.log(`Hello ${personName}, welcome!`);
```

### **Loops**

```typescript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Author

**Aamna**  
Date: July 2025
