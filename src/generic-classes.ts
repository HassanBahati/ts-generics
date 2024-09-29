// with one type parameter
class GenericClass<T> {
  value: T;
  constructor(val: T) {
    this.value = val;
  }

  add(x: T) {
    return x;
  }
}

const numberObj = new GenericClass<number>(100);
console.log(numberObj.add(1));

// with multiple type parameters
class MultiGenericClass<T, U> {
  value: T;
  constructor(val: T) {
    this.value = val;
  }

  add(x: U) {
    return x;
  }
}

const numStringObj = new MultiGenericClass<string, number>(
  "hello there, this is a multi type class"
);
console.log(numStringObj.add(45));
