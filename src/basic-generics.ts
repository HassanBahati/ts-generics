function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(42));
console.log(identity("Hello, TypeScript Generics!"));

// works with any data type and you can identity the type later when the function is called

// T is the variable ie when T is string, arg is of type string and return type is string

// <T> is a generic parameter - acts as a placeholder for any type
