let unit = 700;
let payAmount = 0;


if(unit > 400){
    payAmount += (unit - 400) * 13;
    unit = 400;
}
if(unit <= 400  &&  unit > 200){
    payAmount += (unit - 200) * 8;
    unit = 200;
}
if(unit <= 200  &&  unit > 100){
    payAmount += (unit - 100) * 6;
    unit = 100;
}
payAmount += unit * 4;

console.log(payAmount);