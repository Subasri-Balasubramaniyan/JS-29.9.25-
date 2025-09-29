// Function declaration
console.log("Function declaration")
function greet(){
    console.log("Hello javascript!!!!")
}
greet()

// Function expressions
console.log("Function expressions")
const funcr=function(){
    console.log("Hello everyone!!!")
}
funcr()

// Arrow functions
const greeting=()=>{
    console.log("Good morning!!!")
}
greeting()

// one linear arrow function
console.log("One linear arrow function")
const add=(a,b)=>(a+b)
    console.log(add(10,10))
// Parameters
console.log("parameters")
function welc(name){
    console.log("Hello " +name +"!!!")
}
welc("Guyzzz")

// Default parameters
console.log("Default parameters")
function welcome(name="subasri"){
    console.log("welcome "+name)
}
welcome()
welcome("Jury members")

// Return function
console.log("Return function")
function mul(a,b){
    return(a*b)
}
let result=mul(10,10)
console.log(result)

// Hoisting
console.log("Hoisting")
greet()
function greet(){
    console.log("Helloo pretty!!")
}
function greet(){
    console.log("Helloo pretty!!")
}
greet()
// Example for not working with hoisting because sayHi is a variable
sayHi()
const sayHi=function(){
    console.log("Helooo brownyyy")
}