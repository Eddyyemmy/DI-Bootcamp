// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sumOfNum = (a,b) => (a +b);


// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// const weightConvertion = (kilograms) => ((kilograms*1000));

//function declaration is a names arguement, while function expression is an annonymous argument



// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."




(function addSentence(numberOfChildren, partnerName, geographicLocation, jobTitle) {
  
    const str = `Your will be a ${jobTitle} in ${geographicLocation} and married to  ${partnerName} with ${numberOfChildren} kids.`;
    const p = document.createElement("p");
    p.innerHTML = str
    document.body.append(p);
})(2, "yemi", "North", "Web Dev");