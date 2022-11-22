const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// Create an array using forEach that contains all the usernames from 
// the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this : const usernames = ["john!", "becky!", "susy!", "tyson!"]

// const usernames = getGameInfo(gameInfo);

// function getGameInfo(users) {
    //     const usernames = [];
    //     for (const user of users) {
        //         usernames.push(user.username);
        //     }
        //     return usernames;
        // }
        
// const getGameInfo = gameInfo.map((user) => user.username);
// console.log(getGameInfo);

// 2. Create an array using forEach that contains the usernames of all players
//  with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]

const score = getWinnersByScore(gameInfo)
console.log(score);

function getWinnersByScore(users) {
const score = [];
for (const user of users) {
    if (user.score > 5) {
        score.push(user.username)
    }
    
}
return score;
}


// 3. Find and display the total score of the users. (Hint: The total score 
// is 71)

const totalScore = getTotalScore(gameInfo);
console.log(totalScore);

function getTotalScore(scores) {
    let total = 0
    for (const score of scores) {
        total = total + score.score;
    }
    return total;
}

const totalGameScore = gameInfo.reduce((score, scores) => score + scores.score,0)

console.log(totalGameScore);
