import './App.css';
import React from 'react';
import MovieDetails from './component/MovieDetails';
import MovieList from './component/MovieList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MovieList />
          <MovieDetails />
        </div>
      </header>
    </div>
  );
}

export default App;
