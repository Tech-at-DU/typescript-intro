// 🌟 Generics in TypeScript let you write reusable, type-safe functions.
// Your task: Add generic type annotations to all the functions below.

// 1️⃣ Return the last element of an array (or undefined)
function next<T>(arr: T[]): T | undefined {
  return arr.pop();
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];
console.log(next(arr1));
console.log(next(arr2));

// 2️⃣ Fill an array with repeated values
function fill<T>(value: T, count: number): T[] {
  const arr = new Array(count);
  arr.fill(value);
  return arr;
}
console.log(fill('a', 3));
console.log(fill(9, 4));
console.log(fill({ message: 'hi' }, 2));

// 3️⃣ Shuffle an array
function shuffle<T>(arr: T[]): T[] {
  const arrCopy = [...arr];
  arrCopy.sort(() => 0.5 - Math.random());
  return arrCopy;
}
console.log(shuffle(['a', 'b', 'c', 'd']));

// 4️⃣ Create a function that cycles through elements of an array
function iterate<T>(arr: T[]): () => T {
  let i = 0;
  return () => {
    i += 1;
    if (i === arr.length) {
      i = 0;
    }
    return arr[i];
  };
}

const nextFruit = iterate(['🍓', '🍎', '🍐', '🍊']);
const nextNumber = iterate(shuffle([1, 2, 3, 4, 5]));

console.log(nextFruit());
console.log(nextFruit());
console.log(nextFruit());
console.log(nextFruit());

console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
console.log(nextNumber());
