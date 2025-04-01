// 🧠 These functions use callbacks as parameters.
// Your job is to add proper type annotations for the callback functions.

// 📚 Reference: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-types

// ✅ Task 1: Add a type for a callback that takes a string
function callYouLater(callback, time: number): void {
  setTimeout(() => {
    callback('What it be like?');
  }, time);
}

// ✅ Task 2: Add a type for a callback that takes an object with `success` and `probability`
function callMeMaybe(callback, probability: number): void {
  setTimeout(() => {
    if (Math.random() * 100 < probability) {
      return callback({ success: true, probability });
    }
    callback({ success: false, probability });
  }, 1000);
}

// 💡 Optional Challenge:
// - Create a type alias for the callback used in callMeMaybe
// - Write a test function that uses one or both of these!

export {
  callYouLater,
  callMeMaybe
}
