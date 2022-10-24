// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

var foodList = ["rice", "shawama", "pizza", "tea and bread"];

var mealDaily = ["breakfast", "lunch", "dinner"];

console.log ("I eat " + foodList[3] + " at every " + mealDaily[0]);

// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length; 
let myWatchedSeriesSentence = myWatchedSeries;
console.log("I watched " + myWatchedSeriesLength + " series: "  + myWatchedSeriesSentence);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.splice(2, 2, "friends");
myWatchedSeries.push("Lord of the Rings");
myWatchedSeries.unshift("seekers");
myWatchedSeries.splice(1,1);

console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

var celsiusTemperature = "20";
let fahrenheitTemperature = (celsiusTemperature*1.8)+32;
console.log("Converted fahrenheitTemp is " + fahrenheitTemperature);

// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;


console.log(a+b) //first expression
// Prediction: It will output 55, because 34 + 21 are variables.
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 57, because two same varible plus itselves and plus b varible. 
// Actual:23

// The value of c is 0

console.log(3 + 4 + '5');
// Prediction: it will output 55, 3+4 is a var and '5' is a string
//Actual: 75, because If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


typeof(15);
console.log(15);
// Prediction: This is a object an assigned array
// Actual: displayed number
typeof(5.5);
// Prediction: This is a object an assigned array
// Actual: displayed number

typeof(NaN);
console.log(NaN);
// Prediction: Number
// Actual: Its a none number variable

typeof("hello");
console.log("hello");
// Prediction: this is a String vairiable because its on qotation
// Actual: It's a String vairiable because its on qotation

typeof(true)
console.log(true);
// Prediction:Boolean because boolean only gives two values which are true of false
// Actual: boolean

typeof(1 != 2) 
console.log(1 !=2 );
// Prediction: Number because 1 is not equal to 2
// Actual: Boolean
"hamburger" + "s" 
console.log("hamburger" + "s");
// Prediction: String variable it adds the two value together
// Actual: String variable it adds the two value together

"hamburgers" - "s"
console.log("hamburger" - "s");
// Prediction: String variable it interchange the two value together
// Actual: Not a number varible

"1" + "3"
console.log("1" + "3");
// Prediction: String varibles it merge the to number together
// Actual: String varibles it merge the to number together

"1" - "3"
console.log("1" - "3");
// Prediction: String varibles it minus from each number together
// Actual: String varibles it minus from each number together

"johnny" + 5
console.log("johnny" + 5);
// Prediction: String and Number because when add it merges the string and number together
// Actual: String 

"johnny" - 5 
console.log("johnny" - 5);
// Prediction: String and Number because when substracted the number reduces
// Actual: Not a number varible

99 * "hello"
console.log(99 * "hello");
// Prediction: String and Number 
// Actual: Not a number varible

1 != 1
console.log(1 != 1);
// Prediction: boolean beacause the array is questioning if 1 not equal to 1
// Actual: Boolean 

1 == "1"
console.log(1 == "1");
// Prediction:  boolean beacause the array is questioning if 1 is equal to 1
// Actual: Boolean

1 === "1"
console.log(1 === "1");
// Prediction:  boolean beacause the array is questioning if 1 is equal to 1
// Actual: Typeof didnt run

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.#

5 + "34" 
console.log(5 + "34");
// Prediction: String and Number because when add it merges the string and number together
// Actual: String 

5 - "4"
console.log(5 - "4");
// Prediction:String and Number
// Actual: number

10 % 5
console.log(10 % 5);
// Prediction: division operation Number 
// Actual: modulus operator returns the division remainder

5 % 10
console.log(5 % 10);
// Prediction: division operation Number 
// Actual: modulus operator returns the division remainder

"Java" + "Script"
console.log("Java" + "Script");
// Prediction: String and Number because when add it merges the string and number together
// Actual: String 

" " + " "
console.log(" " + " ");
// Prediction: String and Number because when add it merges the string and number together
// Actual: empty string

" " + 0
console.log(" " + 0);
// Prediction: String and Number because when add it merges the string and number together
// Actual: String

true + true
console.log(true + true);
// Prediction: Boolean 
// Actual: Number 

true + false
console.log(true + false);
// Prediction: Boolean
// Actual: Number

false + true
console.log(false + true);
// Prediction: Boolean
// Actual: Number

false - true
console.log(false - true);
// Prediction: Boolean
// Actual: Number

!true
console.log(!true);
// Prediction: Boolean because ! is not  
// Actual:

3 - 4
console.log(3 - 4);
// Prediction: number
// Actual: number

"Bob" - "bill"
console.log("Bob" - "bill");
// Prediction: string
// Actual: NAN