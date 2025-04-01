// 🧠 TypeScript is trying to help you!
// Your goal: fix the type errors and make the function return the correct result.

// 👀 Check for red underlines in your editor
// 💥 Try compiling this file with:
//    tsc example-2.ts

function getPriceWithTax(amount: number, rate: number): string {
	const price: number = amount.toFixed(2); // ❗Something’s off here...
	const tax: number = price * rate;
	return price + tax;
}

const answer = getPriceWithTax(23.99, 9.5);
console.log(answer);

// 📝 What do you notice about the output?
// 🛠️ Fix the type mismatches
// 💡 Optional: Format the final result to two decimal places

export {
	getPriceWithTax
}