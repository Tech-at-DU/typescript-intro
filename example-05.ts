// 🧠 Tuples are arrays with fixed types and lengths.
// Define a tuple type for each snack: [string, number]

// Example:
// const snack: [string, number] = ['Apple', 95]

// 🔧 Your Tasks:
// - Add types to snack1, snack2, and snack3
// - Add a parameter type for the function `displayNutrition`
// - Add a return type

const snack1 = ['Cookies', 142];
const snack2 = ['Avocado', 234];
const snack3 = ['Banana', 105];

function displayNutrition(food) {
  return `Item: ${food[0]} Calories: ${food[1]}`;
}

console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));

// 🧪 Compile and fix any type issues:
// tsc example-5.ts

export {
  displayNutrition
}
