// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
    console.log("My name is benjamin, i am 24.")
}

infoAboutMe()


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("My name is", personName)
    console.log("is am", personAge, "years old")
    console.log(" my favorite color is", personFavoriteColor)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// function calculateTip() {
//     // Inside the function, use prompt to ask John for the amount of the bill.

//     const amount = Number(prompt("How much is the Bill?"))
//     let tipPercent
//     // Here are the rules
//     // If the bill is less than $50, tip 20%.
//         if (amount < 50) tipPercent = 0.2

//     // If the bill is between $50 and $200, tip 15%.

//         if (amount > 50  && amount < 200) tipPercent = 0.15
//     // If the bill is more than $200, tip 10%.

//         if (amount > 200) tipPercent = 0.1
//     // Console.log the tip amount and the final bill (bill + tip).

//         const tip = amount * (1 + tipPercent)
//         console.log("bill:", amount)
//         console.log("tip:", tip)
// }

// // Call the calculateTip() function.
// calculateTip()

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// function isDivisible(divisor){

//     // In the function, loop through numbers 0 to 500.
//     let sum = 0
//     for (let i = 0; i < 500; i++ ){
        
//         // Console.log all the numbers divisible by 23.
//         if (i % divisor === 0) {
//             console.log(i)
//             sum = sum + i
//         }
//     }
//     console.log("The numbers divisable sum by 23 is:", sum)
// }

// isDivisible(45)




// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum


// 🌟 Exercise 4 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const shoppingList = ["banana", "orange", "blueberry" ]

// // Create a function called myBill() that takes no parameters.

// function myBill() {
//     for (const item of shoppingList){
//         const quatityInStock = stock[item]
//         if(quatityInStock > 0) {
//             const price = prices[item]
//             console.log ('The price of ', item, "is ", price)
//             // If the item is in stock find out the price in the prices object.
//             console.log("and we have ", stock[item], item, " in stock.")
//             // Bonus: If the item is in stock, decrease the item’s stock by 1
//             stock[item] = stock[item] - 1
//             console.log("The new quantity of this time in stock is", stock[item])
//         } else {
//             console.log("There is no ", item, " in stock.")
//         }
        
//     }
// }

// myBill() // Call the myBill() function.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.


// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false


function changeEnough(itemPrice, amountOfChange) {
    // itemPrice: number
    // amountOfChange: array 
    console.log("This is the item price", itemPrice)
    const sum = calculateSum(amountOfChange)
    return (sum > itemPrice)

}
// changeEnough(4.25, [25, 20, 5, 0])
function calculateSum(arr) {

    let sum = 0

    for (let i = 0; i < arr.length; i++){
        let coinValue
        const numberOfCoins = arr[i]
        if (i === 0){ coinValue = 0.25 }
        if (i === 1){ coinValue = 0.10 }
        if (i === 2){ coinValue = 0.05 }
        if (i === 3){ coinValue = 0.01 }
        console.log("we have ", numberOfCoins, " coins that have a value of ", coinValue)

        sum = sum +numberOfCoins * coinValue
    }

    console.log("You own ", sum)
    return sum
}


// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true



// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().


function hotelCost(numberOfNights) {
    // The hotel costs $140 per night. The function should return the total price of the hotel.
    const costPerNight = 140
    const totalPrice = numberOfNights * costPerNight
    // console.log('TotalPrice ', totalPrice)
    return totalPrice
}

function isOnlyNumbers(str){ //Reg Expression that collects only numbers
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function includeNumbers(str){ //Reg Expression that separate strings from numbers
    const regex = new RegExp(/\d/)
    return regex.test(str)
}


// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$


function planeRideCost(destination){
    
    if(destination == "London") return 183
    if(destination == "Paris") return 220
    return 300
}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.


function rentalCarCost(carAnswer) {
    
    const dailyPrice = 40
    const numberOfDays = Number(carAnswer)
    let discount = 0
    if (numberOfDays >= 10) discount = 0.05
    
    const totalPrice = numberOfDays * dailyPrice * (1 - discount)

    
    // console.log("The total of your rental is ", totalPrice)
    return totalPrice
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost (){
    let hotelAnswer
    let carAnswer
    let destination = ""
    
    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (!isOnlyNumbers(hotelAnswer)){
        // It should ask the user for the number of nights they would like to stay in the hotel.
        hotelAnswer = prompt ("How many nights would you like to stay?")
    }
    const numberOfNights = Number(hotelAnswer)

    while (!isOnlyNumbers(carAnswer)){
        carAnswer = prompt ("How many days would you like to rent the car")
    }

    while (destination == null || destination  == "" || includeNumbers(destination)){
        destination = prompt("Where is your destination?")
    }


    const hotelPrice = hotelCost(numberOfNights)
    const planePrice = planeRideCost(destination)
    const carPrice = rentalCarCost(carAnswer)

    console.log("hotelPrice: ", hotelPrice)
    console.log("planePrice: ", planePrice)
    console.log("carPrice: ", carPrice)

    const totalPrice = (hotelPrice + planePrice + carPrice)
    console.log("Total cost of vacation is ", totalPrice)
}

totalVacationCost ()

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3