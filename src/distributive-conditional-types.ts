// distributive conditional types - when union is passed to conditional type,
// ts distrbutes the conditional check across each member of the union

// M extends W ? V : D
// if M extends W, then the type is V; otherwise, it is D

type IsNumber<W, V, D> = W extends number ? V : D;

// eg (string|number) union
type IsNumberOrString = IsNumber<string | number, string, number>;

let checkIfStringOrNumber: IsNumberOrString = 50;

console.log(checkIfStringOrNumber);
