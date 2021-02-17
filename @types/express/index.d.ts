// www.typescriptlang.org/docs/handbook/declaration-merging.html

// Declaration Merging allows you to merge two or more distinct declaration
// or types declared with the same name into a single definition.
// This concept allows you to attach your own custom property onto
// another Typescript interface type.

interface User {
  name: string;
  zipCode: string;
}

interface User {
  age: number;
  zipCode: string; // acceptable
}

interface User {
  zipCode: number; // error
}

declare namespace Express {
  export interface Request {
    // body: { [key: string]: string | undefined };
    // [key: string]: string | undefined;
    user?: Person;
  }
}
