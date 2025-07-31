/* Q:36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
console.log("---------Q36----------");
let make_shirt = (size: string, message: string): void => {
  console.log(
    `The shirt size is ${size} and the message printed on it is: "${message}".`
  );
};
make_shirt("S", "I love TypeScript!");

/* Q:37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("---------Q37----------");
let make_shirt_default = (
  size: string = "L",
  message: string = "I love TypeScript"
): void => {
  console.log(
    `The shirt size is ${size} and the message printed on it is: "${message}".`
  );
};
make_shirt_default();
make_shirt_default("M");
make_shirt_default("S", "Custom message");

/* Q:38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
console.log("---------Q38----------");

const describe_city = (city: string, country: string = "Pakistan"): void => {
  console.log(`${city} is in ${country}.`);
};
describe_city("Karachi");
describe_city("New York", "USA");
describe_city("London", "UK");

/* Q:39 City Country: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Karachi, Pakistan". Call your function with at least three different city-country pairs, and print the value returned by your function.*/
console.log("---------Q39----------");
const city_country = (city: string, country: string): string => {
  return `${city}, ${country}`;
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "UK"));
