# TypeScript Programming Exercises

This repository contains TypeScript solutions for fundamental programming exercises covering variables, strings, arrays, and basic operations.

## Prerequisites

- Node.js installed on your computer
- TypeScript installed globally (`npm install -g typescript`)
- VS Code (recommended IDE)

## File Structure

```
TS/
├── Q1_Q16.ts          # Main TypeScript file with exercises
├── README.md          # This file

```

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

## Key Concepts Demonstrated

### **Variables & Data Types**

```typescript
let personName: string = "Aamna";
const favoriteNumber: number = 6;
let guestList: string[] = ["Ali", "Sara", "Ahmed"];
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

## How to Run

### Compile and Run

```bash
# Compile TypeScript to JavaScript
tsc Q1_Q16.ts

# Run the compiled JavaScript
node Q1_Q16.js
```

## Expected Output

The program will display output for each exercise section, marked with separators like:

```
---------Q2---------
Hello Aamna, would you like to learn some Python today?

---------Q3---------
Upper case: ATOOFA
Lower case: atoofa
Title case: Atoofa
```

## Learning Objectives

By completing these exercises, you will learn:

- TypeScript syntax and type annotations
- Variable declarations and string manipulation
- Array creation and manipulation methods
- Control structures (loops, conditionals)
- Template literals and string interpolation
- Basic program organization and commenting

## Author

**Aamna**  
Date: July 2025
