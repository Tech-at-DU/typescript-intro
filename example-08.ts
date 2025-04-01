// 🦖 Create a Kaiju class
// Each Kaiju should have:
// - name (string)
// - power (number)
// - type (KaijuType enum)

// Use an enum to define possible types: lizard, flying, ape
// Add a constructor to initialize properties
// Add a describe() method that returns a formatted string:
// "name:<name> type:<type> power:<power>"

enum KaijuType {
  // TODO: Add values like Lizard, Flying, Ape
}

class Kaiju {
  // TODO: Define properties, constructor, and describe method
  // describe() should return a string
}

// Optional: Try creating a new Kaiju instance and calling describe()
// const godzilla = new Kaiju('Godzilla', 9000, KaijuType.Lizard)
// console.log(godzilla.describe())

export {
  Kaiju, 
  KaijuType
}
