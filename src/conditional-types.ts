// allow for defining types based on a condition. similar to if-else

// M extends W ? V : D
// if M extends W, then the type is V; otherwise, it is D

type IsString<W, V, D> = W extends string ? V : D;

// eg
type A = IsString<string, string, number>;

let checkIfString: A = "hello";

console.log(checkIfString);
