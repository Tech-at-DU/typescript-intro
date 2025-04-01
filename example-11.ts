import Person, { Course, Student } from './example-10.js'

// 🧠 Both Person and Student have a `name` and `age`
// Let's describe that shared structure with an interface

// ✅ Your Task:
// - Define a Human interface with `name` (string) and `age` (number)

interface Human {
  // TODO
}

// If you completed Student and Person correctly in example-10,
// these should all be assignable to Human:
const amy: Human = new Student('Amy', 21);
const bob: Human = new Person('Bob', 32);
const cat: Human = new Student('Cat', 43);

// 🧪 Use the interface to make a shared array
const allPeople: Human[] = [amy, bob, cat];

// 💬 Bonus: Try iterating over `allPeople` and calling describe()
// allPeople.forEach(p => console.log(p.describe()));

export {
  allPeople
}
