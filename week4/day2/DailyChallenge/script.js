
// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.


// let pattern = 6;
// let str = ""
// for(let i=0; i < pattern; i++){
//     str = str + " * "
//     console.log(str);
//     // for (let j = 0; j <= 2; j++) {
//     //     console.log("*");
//     // }
// }

let pattern = 6

for(let i = 0; i < pattern; i++){
    const stars = i + 1
    let str = ""
    for (let j = 0; j < stars; j++) {
        str = str + " * "
    
    }
    console.log(str);
}