function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// restricts the types that the function/class can accept and this is achived using "extends"

const getHelloLength = getLength("Hello, World");
const getArrayLength = getLength([1, 23, 4]);
// const getNumberLength  = getLength(19) error since a number doesnt have a length property

console.log(getHelloLength);
console.log(getArrayLength);

// T extends {length: number} ensures that T must have a length property
