let num = 123;
let sum = 0;
let fact = 1;
while(num > 0){
    
    let lastNum = num % 10;

    for(let i = 1; i <= lastNum; i++){
         fact = (fact * i);      
    }
    sum = sum + fact;
    num = Math.floor(num / 10)
}
console.log("Factorial is :",fact)
console.log("Sum of Fact is" ,sum)