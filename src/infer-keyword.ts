// infer - allows declaring a type variable with a conditional type
// eg when extracting types from nested or complex types like functions return types, promises, arrays

// 1. extracting function types
type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = (x: number, y: number) => string;

type FuncResult = FuncReturnType<Func>;

// T - function type, R will be inferred as return type of the function
// if T is not a function, type will resolve to never

// 2. extracting promise resolved types
type Unpacked<T> = T extends Promise<infer R> ? R : never;

type PromiseString = Promise<string>;

type UnpackedResult = Unpacked<PromiseString>; //unpacked result is a string

type NonPromise = number;
type NonPromiseResult = Unpacked<NonPromise>; // non promise result is a number

//  Unpacked checks if T is a promise and if so, infers resolved type R, otherwise it returns T

// 3. extracting array elements
type ElementType<T> = T extends Array<infer E> ? E : never;

type StringArray = string[];

type StringElement = ElementType<StringArray>; // string element is a string

type NumberArray = number[];

type NumberElement = ElementType<NumberArray>; // number element is a number

// ElementType checks if T is an array and if so infers the elment type E

// 4. extracting tuple element types
type FirstElement<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type Tuple = [number, string, boolean];

type First = FirstElement<Tuple>; // first element is a number

// FirstEelement extracts the first type of a tuple
