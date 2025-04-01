// 🧠 Functions can be described as types.
// This is especially useful when:
// - passing a callback
// - returning a function from a function (closure)

// 📚 Read more: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

// ✅ Your Task:
// - Add parameter and return types for all functions below
// - Use function type expressions where appropriate

// Returns a function that counts up from 0 each time it's called
function count() {
  let n = 0;
  return () => {
    return n += 1;
  };
}

// Returns a function that cycles through items in an array
function next(arr) {
  let i = -1;
  return () => {
    i += 1;
    i = i === arr.length ? 0 : i;
    return arr[i];
  };
}

// Returns a function that simulates a die roll
function dice(sides) {
  return (n) => {
    return Math.floor(Math.random() * sides) * n;
  };
}

// 💡 Bonus: Can you write your own function that returns a function?

export {
  count,
  next,
  dice
}
