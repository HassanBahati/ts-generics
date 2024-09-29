function defaultIdentity<T = string>(arg: T): T {
  return arg;
}

// let defaultString = identity() - will be string by default
let numberIdentity = defaultIdentity<number>(9);

console.log(numberIdentity);
