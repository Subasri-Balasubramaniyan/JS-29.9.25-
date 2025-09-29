// for loop
console.log("For loop")
for(let i=1;i<=5;i++){
    console.log("count: "+i)
}

// While loop
console.log("while loop")
let k=1
while(k<=5){
    console.log("Numbers:" +k*2)
    k++;
}


// Do while loop
console.log("Do while loop")
let j=1
do{
    console.log("Values:" +j/2)
    j++;
}while(j<=5)

// Break statement
console.log("Break statement")
for(let a=1;a<=5;a++){
    if(a==5){
        break;
    }
    console.log("Values :"+a)
}

// Continue statement
console.log("continue statement")
for(let b=1;b<=5;b++){
    if(b==3){
        continue;
    }
    console.log("Numbers:" +b)
}

// For in loop
console.log("For in loop")
let place={one:"India",two:"Canada", three:"Japan",four:"China"}
for(let key in place){
    console.log(key+":"+place[key])
}

// For of loop
console.log("For of loop")
let fruits=["Apple","Banana","Orange","Papaya"]
for(let fruit of fruits){
    console.log(fruit)
}
