let num = 11;
let isprime = true;
 
for(let i = 2; i < num; i++){
    if(num % i === 0 ){
        isprime = false;
        break;
    } 
}

console.log("Is Prime :", isprime);

       
    