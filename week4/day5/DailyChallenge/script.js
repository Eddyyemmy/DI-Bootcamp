// Prompt the user for a number to begin counting down bottles.
let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput() {
    const answer = prompt("How many beers?");
    if (answer == "") return  alert("Please enter something");
    const number = Number(answer);
    if (Number.isNaN(number)) return alert("Please enter a number");
    return number;
}

while (numberOfBeers > 0) {
    const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
    console.log(stanza);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway++;
}

function makeStanza(num, counter) {
    const bottleOrBottles = getBottleOrBottles(num);
    const bottleToTakeAway = getSmallerNumber(counter, num);
    const remainingBottles = getBiggerNumber(num - counter, 0);
    const remainingBottleOrBottles = getBottleOrBottles(remainingBottles);

    const stanza = `${num} ${bottleOrBottles} of beer on the wall 
    ${num} ${bottleOrBottles} of beer 
    Take  ${bottleToTakeAway} down, pass it around 
    ${remainingBottles} ${remainingBottleOrBottles} of beer on the wall`;
    
    return stanza;
}

function getBiggerNumber(a, b) {
    return a > b ? a : b;
}

function getSmallerNumber(a, b) {
    return a < b ? a : b;
}

function isPlural(num) {
    return num > 1;
    
}

function getBottleOrBottles(num) {
    return isPlural(num) ? "bottles" : "bottle";
}


// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around