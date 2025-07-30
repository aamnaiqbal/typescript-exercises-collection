# TypeScript Programming Exercises

This repository contains TypeScript solutions for 27 fundamental programming exercises covering variables, strings, arrays, objects, and conditional logic.

## Prerequisites

- Node.js installed on your computer
- TypeScript installed globally (`npm install -g typescript`)
- VS Code (recommended IDE)

## File Structure

```
typescript-exercises-collection/
├── Q1_Q20/
│   └── Q1_Q20.ts          # First 20 exercises (Q1-Q20)
├── Q21_Q27/
│   └── Q21_Q27.ts         # Advanced exercises (Q21-Q27)
└── README.md              # This file

```

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

## Expected Output

The program will display output for each of the 27 exercise sections, marked with separators like:

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

## Learning Objectives

By completing these 27 exercises, you will learn:

- TypeScript syntax and type annotations
- Variable declarations and string manipulation
- Array creation and manipulation methods
- Object creation and interface definitions
- Control structures (loops, conditionals)
- Template literals and string interpolation
- Advanced array operations (sorting, reversing, slicing)
- Conditional logic and boolean operations
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

### **Conditional Logic**

```typescript
if (alien_color === "green") {
  console.log("Player earned 5 points");
} else if (alien_color === "yellow") {
  console.log("Player earned 10 points");
} else {
  console.log("Player earned 15 points");
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
