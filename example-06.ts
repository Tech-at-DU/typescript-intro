// 🧠 You can define a tuple type like this:
type Snack = [string, number]

// 🧪 Your Task:
// - Use the Snack type for snack1, snack2, and snack3
// - Add the correct parameter type to displayNutrition
// - Fix the function to actually return a string

const snack1 = ['Cookies', 142];
const snack2 = ['Avocado', 234];
const snack3 = ['Banana', 105];

function displayNutrition(food) {
  return `Item: ${food[0]} Calories: ${food[1]}`; // <- something's missing here
}

console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));

// 💡 Hint: Add types and make sure the function returns a string

// 🧪 Compile with:
// tsc example-6.ts

export {
  displayNutrition
}
