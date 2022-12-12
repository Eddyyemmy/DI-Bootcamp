// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// function compareToTen(num){
//     const compareNum = new Promise((resolve, reject)=> {
//         if(num<=10){
//             resolve ('Num is less than 10')
//         }else{
//             reject('Num is greater than 10')
//         }
//     })
//     compareNum.then((result)=>{console.log(result)})
//     compareNum.catch(error=>console.log(error))
// }

// compareToTen(10);

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

// const processing = new Promise((resolve, reject) => {
//     console.log('Processing .....');
//     setTimeout(() => {
//         const para = true
//         if(para == true){
//             resolve ('Success')
//         }else{
//             reject('Oops something went wrong.')
//         }
//     }, 4000)
// }).then(result => console.log(result)).catch(error => console.log(error))

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseResolve = Promise.resolve(3);

promiseResolve.then(result=>console.log(result))

const promiseReject = Promise.reject("Boo!").catch(error => console.log(error))