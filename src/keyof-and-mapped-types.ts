// keyof - retrieves key in an object type as a union type
// enables dynamically working with object properties

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // either "name" or "age"

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person = getProperty({ name: "john", age: 40 }, "name");

console.log(person);

// mapped types => allow for creating new types based on existing ones by transforming the properties
// useful for creating variations of types while maintaining some structure

type CustomReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  age: number;
  name: string;
}

//mapped type based on CustomReadOnly and Person
type ReadOnlyPerson = CustomReadOnly<Person>;

const persona = {
  name: "john",
  age: 340,
};

// CustomReadOnly  creates a new type where all properties of T are readonly
// K in keyof T iterates over all keys in T allow to create new properties based on the original

// keyof + mapped types
type PartialType<T> = {
  [K in keyof T]?: T[K]; // ? makes each property optional
};

interface Person {
  name: string;
  age: number;
}

type PartialPerson = PartialType<Person>; // all properties of person will be optional

const partialPerson = {
  name: "john",
};

//valid since all properties are optional
const anotherPerson: PartialPerson = {};
