// Global scope
let globalvar="I am global"
function myglobe(){
    console.log(globalvar)
}
myglobe()
console.log(globalvar)

// Local scopee
function localscope(){
    let local="I am local"
    console.log(local)
}
// localscope()
// console.log(local)

// Lexical scope
function outer(){
    let outervar="I am outer"
    function inner(){
        console.log(outervar)
    }
    inner()
}
outer()
// Closures
function counter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let increment = counter(); 

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
// The increment function remembers the count variable from its outer function (counter).
// This is a closure in action.

// Varible shadowning
let name = "Global";

function printName() {
  let name = "Local"; // shadows global 'name'
  console.log(name);  // Output: Local
}

printName();
console.log(name);    // Output: Global
