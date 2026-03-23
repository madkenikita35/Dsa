let money = 1651;
let notes = 0 ;

if(money >= 500){
    notes = Math.floor(money/500);
    money = money % 500;
    console.log("500 notes:", notes)
}

if(money >= 200){
    notes = Math.floor(money/200);
    money = money % 200;
    console.log("200 notes:", notes)
}

if(money >= 100){
    // console.log("100 if", money)
    notes = Math.floor(money/100);
    money = money % 100;
    
    console.log("100 notes:", notes)
}

if(money >= 50){
    notes = Math.floor(money / 50);
    money = money % 50;
    console.log("50 notes:", notes)
}
if(money >= 20){
    notes = Math.floor(money/20);
    money = money%20;
    console.log("20 notes:", notes)
}
if(money >= 10){
    notes = Math.floor(money/10);
    money = money%10;
    console.log("10 notes:", notes)
}
if(money >= 5){
    notes = Math.floor(money/5);
    money = money%5;
    console.log("5 notes:", notes)
}
if(money >= 1){
    notes = money/1;
    console.log("1 notes:", notes)
}