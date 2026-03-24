let num = 145;
let sum = 0;
 var copy = num;

while(num > 0){
   
    let lastNum = num % 10;
    let fact = 1;

    for(let i = 1; i <= lastNum; i++){
         fact = (fact * i);      
    }
    sum = sum + fact;
    num = Math.floor(num / 10)
   
}

if(sum === copy){
    console.log("Strong Number")
}else{
    console.log("Not a Strong Number")
}

// process.stdout.write("Hello")
// process.stdout.write("World")

// console.log("Hello")
// console.log("World")
