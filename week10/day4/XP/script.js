// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// async function conversion() {
//     const urlFetch = await fetch("https://www.swapi.tech/api/starships/9/")
//     const data = await urlFetch.json()
//     console.log(data);
// }

// conversion()

// Exercise 2: Analyze
// Instructions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

///Analysed that CALLING would console log first then resolved would be log after the count down timeout after 2sec