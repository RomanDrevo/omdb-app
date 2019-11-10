import React, {Component} from 'react'
import './MovieDetails.css'
import MovieImg from "./MovieImg";


class MovieDetails extends Component {
    render() {
        const {movie} = this.props

      console.log(movie);

      return (
            <div className="movie-details-wrapper mt5 jumbotron">
                <div>
                    <div className="movie-img-wrapper">
                        <MovieImg movie={movie}/>
                    </div>
                </div>
                <div>
                    <div className="movie-description flex flex-column">
                        <h2>{movie.name}</h2>
                        <div className="flex movie-details">
                            <h5 className="mr2">Hour: <b>{movie.hour}</b></h5>
                            <h5 className="mr2">Category: <b>{movie.category}</b></h5>
                            <h5 className="mr2">Rate: <b>{movie.rate}</b></h5>
                            <h5 className="mr2">Year: <b>{movie.year}</b></h5>
                        </div>
                        <p className="">
                            {movie.description}
                        </p>
                        <div className="flex">
                            <div className="action-button mr3">Edit
                                Movie
                            </div>
                            <div className="action-button">Delete
                                Movie
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails
