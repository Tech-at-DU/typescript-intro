// 👤 A Person has a name and an age
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	describe(): string {
		return `${this.name} is ${this.age}`;
	}
}

const joe = new Person('Joe', 33);

// 🎓 Define a Course
// - title: string
// - units: number
class Course {
	// TODO
}

// 🧑‍🎓 Define a Student class
// - extends Person
// - has courses: Course[]
// - has cohort: 'junior' | 'senior'
// - has enroll(course: Course): void

class Student {
	// TODO
	// Bonus: override describe() to include the cohort and number of courses
}

// 💡 Optional:
// const cs101 = new Course('Intro to TypeScript', 3);
// const student = new Student('Alex', 20, 'junior');
// student.enroll(cs101);
// console.log(student.describe());

export default Person;
export {
	Course,
	Student
}
