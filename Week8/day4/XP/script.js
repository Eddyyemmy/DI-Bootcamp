// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, 
// coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. 
// Latitude(${lat})`);

// result = I am John Doe from vancouver, canada. Latitude 49.2827

// Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    //destructuring
    const {first} = objUser
    const{last} = objUser

    console.log(`Your full name is ${first} ${last} `);
}

//output : 'Your full name is Elie Schoppik'
displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside 
// the function and return a string as the example seen below:
