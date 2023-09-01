interface User {
    name: string
    rollNumber: number
}

const user: User = {
    name: 'Ram',
    rollNumber: 23
}

// In the context of Array<T>, T is a generic type parameter. 
// Generics in TypeScript allow you to create reusable components, functions, or data structures 
// that work with different types while maintaining type safety.

// Creating an array of numbers
const numbers: Array<number> = [1, 2, 3, 4, 5];

// Creating an array of strings
const strings: Array<string> = ["apple", "banana", "cherry"];

// A function that operates on arrays of any type
function printArray<T>(arr: Array<T>): void {
  for (const item of arr) {
    console.log(item);
  }
}

// function in js
function printArray1(arr) {
    for( const item of arr) {
        console.log(item)
    }
}

printArray(numbers); // Prints numbers
printArray(strings); // Prints strings


declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad("hi", 10, "left");

let s = 'left'
// pad('hi', 10, s) //Argument of type 'string' is not assignable to parameter of type '"left" | "right"'.

let si: "left" | "right" = "right";
pad("hi", 10, si);

type Size = [number, number]

let number: Size = [12, 90]

// Difference between interface and type

// both are used to define custom data structures and shapes for objects, 
// but they have some differences in how they work and their intended use cases:

// Declaration Merging

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30,
};

// Extending Interfaces
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Fido",
    breed: "Golden Retriever",
};

// Implements Clause

interface Printable {
    print(): void;
}

class DocumentOne implements Printable {
    print() {
        console.log("Printing document...");
    }
}

// Types (Type Aliases):
// Union and Intersection Types:

type Age = number;
type Name = string;

type PersonOne = {
    name: Name;
    age: Age;
};

type Employee = PersonOne & {
    employeeId: string;
};
