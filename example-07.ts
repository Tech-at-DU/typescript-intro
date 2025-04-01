// 🃏 Let's model a playing card using an enum and an object type

// 1. Define an enum called Suit with: Clubs, Diamonds, Hearts, Spades
// 2. Create a Card type with:
//    - suit: Suit
//    - value: number

enum Suit {
  // TODO: Add the four suits here
}

type Card = {
  suit: Suit;
  value: number;
}

// 3. Create a constant called `ace`
//    It should have:
//    - suit: one of the Suit enum values
//    - value: 1

const ace: Card = {
  // TODO: Fill this in
}

// 🧪 Compile this with:
// tsc example-7.ts

// 🧠 Optional: Try logging `Suit.Hearts` to see what enums evaluate to
// console.log(Suit.Hearts)

export {
  Suit,
  Card
}
