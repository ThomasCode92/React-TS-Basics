// Primitives: number, string, boolean
let age: number;
age = 31;

let userName: string;
userName = 'Thomas';

let isInstructor: boolean;
isInstructor = false;

// More complex types: arrays, objects
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = { name: string; age: number };

let person: Person;
person = { name: 'Thomas', age: 31 };

let people: Person[];

// Function types, parameters
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: string) {
  console.log(value);
}

// Type inference
let course = 'React - The Complete Guide'; // course is now of type string

// Union Types
let book: string | number;
