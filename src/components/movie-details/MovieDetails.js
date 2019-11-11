import React, {Component} from 'react'
import style from './MovieDetails.module.scss'
import MovieImg from "./MovieImg";


class MovieDetails extends Component {
    render() {
        const {movie} = this.props

      console.log(movie);

      return (
            <div className={`${style["movie-details"]}`}>
              <div className="movie-img-wrapper">
                <MovieImg movie={movie}/>
              </div>

                <div className="movie-description">
                  <h2>Name: {movie.Title}</h2>
                  <div className="movie-details">
                    <h5 className="mr2">Year: <b>{movie.Year}</b></h5>
                  </div>
                  <p className="">
                    {movie.description}
                  </p>

                </div>

            </div>
        )
    }
}

export default MovieDetails
