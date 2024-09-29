// typescript utilities - partialDog, omit, pick, record

interface Dog {
  name: string;
  age: number;
  breed: string;
}

// Partial<T> -  Partial makes all properties optional
let partialDog: Partial<Dog> = { name: "Dog" };

// Pick<T, K> - Pick selects specific properties
let dogAge: Pick<Dog, "age"> = { age: 9 };

// Omit<T, K> - Omit removes specific properties
let dogWithoutName: Omit<Dog, "name"> = { age: 50, breed: "dog breed" };

// Record<T, K> - creates a new dictionary with K as a the key and T and value
let dogsRecord: Record<string, Dog> = {
  dog1: { name: "dog1", age: 3, breed: "dogbreed" },
};
