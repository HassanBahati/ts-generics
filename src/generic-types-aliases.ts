type Pair<T, U> = [T, U];

// syntax type T = Y is used to create aliases

let examplePair: Pair<number, number> = [10, 20];
let exampleName: Pair<string, string> = ["john", "doe"];

console.log(examplePair);
console.log(exampleName);

type User<
  T = string,
  U = number,
  X extends Pair<any, any> = Pair<number, number>
> = {
  name: T;
  age: U;
  role: T;
  balance: X;
};

let basicUser: User = {
  name: "John Doe",
  age: 30,
  role: "user",
  balance: [10, 40],
};

// the initial type can be overridden
let overriddenUser: User<string, string> = {
  name: "John Doe",
  age: "30",
  role: "user",
  balance: [10, 40],
};

console.log(basicUser);
console.log(overriddenUser);
