// generics can be used to create resuable interfaces with flexible types

interface Box<T> {
  contents: T;
}

let stringBox: Box<string> = { contents: "Hello" };
let numberBox: Box<number> = { contents: 20 };

console.log(stringBox);
console.log(numberBox);

// the Box interfaces can be reused with different types
