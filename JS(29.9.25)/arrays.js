// Creation
// Using array literal
let fruits = ["Apple", "Banana", "Mango"];

// Using new Array()
let numbers = new Array(1, 2, 3, 4);

console.log(fruits);  // ["Apple", "Banana", "Mango"]
console.log(numbers); // [1, 2, 3, 4]

// Indexing
// Using array literal
let fruits = ["Apple", "Banana", "Mango"];

// Using new Array()
let numbers = new Array(1, 2, 3, 4);

console.log(fruits);  // ["Apple", "Banana", "Mango"]
console.log(numbers); // [1, 2, 3, 4]

// Push & pop
let animals = ["Dog", "Cat"];
animals.push("Lion");   // ["Dog", "Cat", "Lion"]
animals.pop();          // ["Dog", "Cat"]

// Shiftand unshift
let animals = ["Dog", "Cat"];
animals.push("Lion");   // ["Dog", "Cat", "Lion"]
animals.pop();          // ["Dog", "Cat"]

// splice
let numbers = [1, 2, 3, 4, 5];

// remove 2 elements from index 1
numbers.splice(1, 2);  
console.log(numbers); // [1, 4, 5]

// insert at index 1
numbers.splice(1, 0, 10, 20);
console.log(numbers); // [1, 10, 20, 4, 5]

// slice
let letters = ["a", "b", "c", "d", "e"];

let part = letters.slice(1, 4); 
console.log(part);      // ["b", "c", "d"]
console.log(letters);   // ["a", "b", "c", "d", "e"]

// map
let nums = [1, 2, 3, 4];

let squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]

// filter
let ages = [12, 18, 25, 30];

let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

// reduce
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
