// 🧭 You are building a mapping application.
// Use a string enum to define the four directions
// Example: North = "north"

// 💡 Docs: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
  // TODO: Add North, South, East, West as string values
}

class MapPosition {
  heading: Direction;

  constructor() {
    // TODO: Set a default direction
  }

  // 🧭 Updates the heading
  move(newDirection: Direction): void {
    // TODO: Set heading to newDirection
    // Print the new direction
  }

  // 🗺️ Returns a string like: "You are heading north"
  describe(): string {
    // TODO
    return '';
  }
}

// Example usage:
const location = new MapPosition();
console.log(location.describe());
location.move(/* Add a Direction here */);

export default MapPosition;
