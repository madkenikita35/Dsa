let n = 4;
for(var i = 1; i <= n; i++){
    for(var j = 1; j <= i; j++){
        process.stdout.write(""+ j)
}
console.log()
}
//Output
// 1
// 12
// 123
// 1234

//Second Way
// let n = 4;
// for(var i = 1; i <= n; i++){
//     for(var j = 1; j <= i; j++){
//         process.stdout.write(""+ i)
// }
// console.log()
// }

//Output
// 1
// 22
// 333
// 4444