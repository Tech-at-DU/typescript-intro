// 🧠 Function Types Revisited: Functions returning functions
// These are used everywhere in modern JavaScript and TypeScript — think: middleware, event handlers, hooks, etc.

// ✅ Your Task:
// - Add/verify type annotations for functions that return other functions
// - Try writing your own!

// Returns a function that returns a string
function sayHello(): () => string {
    return () => 'Hello!';
}

const hello = sayHello();
console.log(hello()); // Hello!
console.log(hello()); // Hello!
  
// Returns a function that multiplies any number by `n`
function mathematizer(n: number): (x: number) => number {
let sum = n;
return (x) => x * n;
}

const m = mathematizer(3);
console.log(m(3));   // 9
console.log(m(2));   // 6
console.log(m(10));  // 30

// 🧪 Bonus Challenge:
// Write a function `makeGreeter(name: string): () => string`
// It should return a function that says "Hi, <name>!"

