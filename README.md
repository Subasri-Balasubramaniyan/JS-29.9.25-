🔁 Loops
1. for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

2. while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

3. do...while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

4. break
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

5. continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

6. for...in (object keys)
let person = { name: "Suba", age: 21 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

7. for...of (iterable values)
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

⚡ Functions
1. Function Declaration
function greet() {
  console.log("Hello!");
}
greet();

2. Function Expression
const sayHi = function() {
  console.log("Hi!");
};
sayHi();

3. Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

4. Parameters + Default Values
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();       // Hello, Guest
greet("Suba"); // Hello, Suba

5. Return
function square(n) {
  return n * n;
}
console.log(square(4)); // 16

6. Hoisting
hello(); // ✅ works
function hello() { console.log("Hoisted!"); }

// sayHi(); ❌ error
const sayHi = function() { console.log("Not hoisted"); };

🌍 Scope & Closures
1. Global Scope
let globalVar = "I am global";
console.log(globalVar);

2. Local Scope
function test() {
  let localVar = "I am local";
  console.log(localVar);
}
test();
// console.log(localVar); ❌ Error

3. Lexical Scope
function outer() {
  let outerVar = "outer";
  function inner() {
    console.log(outerVar); // accessible
  }
  inner();
}
outer();

4. Closures
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let inc = counter();
console.log(inc()); // 1
console.log(inc()); // 2

5. Variable Shadowing
let name = "Global";
function show() {
  let name = "Local"; 
  console.log(name); // Local
}
show();
console.log(name); // Global

📦 Arrays
1. Creation
let fruits = ["Apple", "Banana", "Mango"];
let nums = new Array(1, 2, 3);

2. Indexing
console.log(fruits[0]); // Apple
fruits[1] = "Orange";

3. push & pop
fruits.push("Grapes"); // add end
fruits.pop();          // remove end

4. shift & unshift
fruits.unshift("Pineapple"); // add start
fruits.shift();              // remove start

5. splice (add/remove anywhere)
let numbers = [1, 2, 3, 4];
numbers.splice(1, 2);        // [1, 4]
numbers.splice(1, 0, 10);    // [1, 10, 4]

6. slice (copy portion)
let letters = ["a", "b", "c", "d"];
console.log(letters.slice(1, 3)); // ["b", "c"]

7. map (transform array)
let squared = [1, 2, 3].map(n => n * n);
console.log(squared); // [1, 4, 9]

8. filter (condition)
let ages = [12, 18, 25];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25]

9. reduce (reduce to single value)
let sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
