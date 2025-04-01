// 🚨 This code has a subtle bug.
// It's a great example of how JavaScript's dynamic typing can lead to unexpected results.

function getPriceWithTax(amount, rate) {
	// ❌ .toFixed(2) returns a string, NOT a number!
	const price = amount.toFixed(2);

	// ❓ price is a string, so what happens when we multiply by a number?
	const tax = price * rate;

	// ❌ Adding a string and a number = string concatenation, NOT addition
	return price + tax;
}

// ➕ 23.99 + (23.99 * 9.5)? Not quite...
const answer = getPriceWithTax(23.99, 9.5);
console.log(answer); // => "23.99180.5" ← Wrong!

// 🧠 Discussion:
// - Why did we get a weird result?
// - How might TypeScript help prevent this?
