// 🧠 Improve the type safety of this file using your work from example-08

// 🛠️ TODO:
// 1. Import Kaiju and KaijuType from example-8.ts
// 2. Add proper parameter types for `kaiju` and `city`
// 3. Fix the switch statement to use the KaijuType enum instead of strings

// import { Kaiju, KaijuType } from './example-08' // uncomment if running standalone

function rampage(kaiju, city) {
  const { name, type, power } = kaiju;
  let action: string;

  switch (type) {
    case 'ape':
      action = 'smash';
      break;
    case 'lizard':
      action = 'burn';
      break;
    case 'flying':
      action = 'flap';
      break;
  }

  return `${name} ${action} over ${city} causing ${power * 10000} damage!`;
}

// 👾 Define Kaiju instances using the Kaiju class and KaijuType enum
const gojira = new Kaiju('Gojira', 90, KaijuType.lizard);

// Add two more Kaiju monsters here...

console.log(rampage(gojira, 'Tokyo'));
// Call rampage with the other Kaiju and cities!
