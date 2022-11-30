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

// Exercise 3: User & Id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into 
// an array:

function turnOjectToArray(arr) {
    let newArr = Object.entries(arr)
    for (const [key, value] of newArr) {
        let total = `${key} ${value * 2}`
        console.log(typeof total);
    }
    console.log(newArr);
}

console.log(turnOjectToArray(users));

// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], 
// [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(member); 
//consolog first aphabet of John
// correction displayed Object

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };



  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}; //this will successdfully exetend the Dog class 

const member2 = new Labrador('John', 4);
console.log(member2); 

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

console.log([2] === [2]) //false 
console.log({} === {}) //false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // number: 5, 4 because 4 was assigned to object1 (correction object1 was redeclared)
console.log(object3.number) // number: 5, 4 because 4 was assigned to object1 (correction object1 was redeclared)
console.log(object4.number) // number: 5


// Create a class Animal with the attributes name, type and color. The type is the animal type, 
// for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) 
// as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls 
// the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class animal {
    constructor(name, type, color) {
        this.name = ''
        this.type = ''
        this.color = ''
    }
}

class mamal extends animal {
    constructor(name, type, color) {
        super(name)
        this.sound  = 'moos'
    }
    
    sound(){
        return this.sound = this.sound
    }
   
}

const farmerCow = {
    name: 'john',
    type: 'cat',
    color: 'white'
}

const member3 = new mamal (`I'm a ${farmerCow.type}, named ${farmerCow.name} and ${farmerCow.color} and white`);
console.log(`I'm a ${farmerCow.type}, named ${farmerCow.name} and ${farmerCow.color} and white`); 

