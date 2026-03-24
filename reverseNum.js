let num = 1234;
let rev = 0;

if(num > 0){
    while(num > 0){
        let rem = (num % 10) //43
        rev = (rev * 10) + rem; //43
        num = Math.floor(num / 10)// 12
    }
}
console.log(rev)

