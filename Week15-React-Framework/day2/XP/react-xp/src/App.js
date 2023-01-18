// export default function App() {
//   return <h1>I do not use JSX!</h1>;
// }

import React from 'react';
import Exercise4 from './Exercise4';


// function App() {
//     const myelement = <h1>I Love JSX!</h1>
//     return myelement;
// }


// function App() {
//     const sum = 5 + 5
//     return <h2>React is {sum} times better with JSX"</h2>;
// }

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteColors fav_animals ={user.favAnimals}/>
    </>
  )
}

function UserFavoriteColors(props) {
  const fav_animals = props.fav_animals;
  return fav_animals.map((animal,key) => <li key={key}>{animal}</li>
  );
}

export default App;
