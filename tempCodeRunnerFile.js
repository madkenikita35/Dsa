if(money >= 100){
    notes += Math.floor(money/100);
    money = money % 100;
    console.log("100 notes:", notes)
}