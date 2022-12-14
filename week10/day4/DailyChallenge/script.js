// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

// expected output: Array [3, 42, "foo"]

//         const promise1 = Promise.resolve(3);
//         const promise2 = 42;
//         const promise3 = new Promise((resolve, reject) => {
//           setTimeout(resolve, 3000, 'foo');
//         });

// Promise.all([promise1, promise2, promise3])
// .then((res) => console.log(res)).catch(console.error())


// Promise.all goes through all promises and check if all promise are resolved,
// if sure there are it would resole the promise. it reject if any out of all promise gets rejected.



// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const form = document.querySelector("form");
form.addEventListener("submit", getInput);

async function getInput(e) {
    e.preventDefault()
    const [parisLat, parisLng, newyorkLat, newyorkLng] = [...form.elements].map((input) => input.value);
    
    const url1 = await fetch(`https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLng}`).then((res) => res.json());
    const url2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${newyorkLat}&lng=${newyorkLng}`).then((res) => res.json());

    // const promise = await url1.then((res) => res.json());
    // const promise2 = await url2.then((res) => res.json());

    await Promise.all([url1, url2])
    .then((res)=> {
        console.log(res[0].results.sunrise)
        console.log(res[1].results.sunrise)
    })
    .catch((err) => console.error(err))
    
}
// https://sunrise-sunset.org/api.