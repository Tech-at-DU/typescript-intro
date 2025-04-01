
# 🧠 TypeScript Lab – Full Intro Series

Welcome to your TypeScript lab series! This project walks you through the core concepts of TypeScript via short, self-contained code challenges. Start with basic types and build your way up to generics, interfaces, classes, and functional patterns.

Each `example-XX.ts` file focuses on a specific concept and asks you to explore or fix the code. Use `tsc` to compile files and your editor to understand type warnings.

---

## 📘 Lab Outline

### 🟢 BASICS

**example-01.js**  
🤯 JavaScript type confusion: What happens when you don't use types?

**example-02.ts**  
🛠️ First type annotations. Fix incorrect type assignments and return types.

**example-03.ts**  
✍️ Add parameter, variable, and return types to a basic string copier.

**example-04.ts**  
🧮 Type two arrays and annotate utility functions.

**example-05.ts**  
🧺 Use tuple types to define snacks and annotate a display function.

**example-06.ts**  
🔁 Create a `Snack` type alias and use it with typed tuples and a display function.

**example-07.ts**  
🃏 Define an enum for card suits and use it in a `Card` object.

**example-08.ts**  
🦖 Create a `Kaiju` class using an enum for monster types and a method to describe it.

**example-09.ts**  
💥 Use the `Kaiju` class with a `rampage()` function that uses enum values correctly.

---

### 🟡 INTERMEDIATE

**example-10.ts**  
🎓 Create `Course` and `Student` classes. Practice inheritance, arrays, and custom methods.

**example-11.ts**  
🧑‍🤝‍🧑 Use interfaces to generalize `Person` and `Student` into a `Human` interface.

**example-12.ts**  
🧭 Define a string enum for directions. Build a class to track and describe movement.

**example-13.ts**  
🔁 Functions returning functions: closures, counters, array navigators.

**example-14.ts**  
📞 Type callback functions passed to `setTimeout`.

**example-15.ts**  
📦 Higher-order functions with typed return functions: sayHello, mathematizer.

---

### 🔵 ADVANCED

**example-16.ts**  
💡 Introduce generics with `next()`, `fill()`, `shuffle()`, and `iterate()` functions.

**example-17.ts**  
🤖 Design an interface and implement a `GiantRobot` class with shared structure and methods.

---

## ✅ Tips for Success

- Use `tsc example-X.ts` to check for compile-time type errors.
- Use TypeScript docs to explore [types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), and [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).
- Try writing your own tests and alternate solutions.
- Use AI (like ChatGPT!) to explain compiler errors and explore new type ideas.

---

## 🧪 Optional Challenge

At the end of the lab, try creating a small app using your own types and classes, such as:

- A simple RPG stat system
- A todo list with typed tasks
- A small game board with movements

Happy coding!
