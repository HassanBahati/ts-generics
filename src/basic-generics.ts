function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(42));
console.log(identity("Hello, TypeScript Generics!"));
