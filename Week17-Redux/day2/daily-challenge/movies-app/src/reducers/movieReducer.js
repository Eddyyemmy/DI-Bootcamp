import { combineReducers, createStore } from "redux";
import { SELECT_MOVIE } from "../actions/movieActions";


const MovieList = [
    {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
    {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
    {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
    {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
    {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
  ];

function getMoviesFromTitle(title) {
    const movie = MovieList.find((movie) => movie.title === title);
    return movie;
  }

function movieReducer(state = MovieList, action) {
  return state;
}

function selectedMovieReducer(state = {}, action) {
  if (action.type === SELECT_MOVIE) return getMoviesFromTitle(action.title);
  return state;
}

const rootReducer = combineReducers({
  movies: movieReducer,
  selectedMovie: selectedMovieReducer
});
export const store = createStore(rootReducer);