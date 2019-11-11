import React, { Component } from 'react'
import MovieDetails from '../movie-details/MovieDetails'
import style from "./MoviesList.module.scss"
import Spinner from "../Spinner/Spinner";


class MoviesList extends Component {
  render() {

    const {movies, isLoading} = this.props;

    if(isLoading) {
      return <div><Spinner/></div>
    }

    return (
      <div className={`${style["movies-list-wrapper"]}`}>

        <h1> Movies List</h1>
        {
          movies.map((movie) => (
            <MovieDetails key={movie.imdbID} movie={movie} />
          ))
        }
      </div>
    )
  }
}

export default MoviesList
