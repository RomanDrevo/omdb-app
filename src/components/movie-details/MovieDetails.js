import React, {Component} from 'react'
import style from './MovieDetails.module.scss'
import MovieImg from "./MovieImg";
import {getError, getLoadingStatus, getMovies, getSearchText} from "../../store/selectors";
import {showMovieDetails} from "../../store/actions/moviesActions";
import {connect} from "react-redux";


class MovieDetails extends Component {

  handleShowDetails = () => {
    const {showMovieDetails} = this.props

    showMovieDetails(true)
  }

    render() {
        const {movie} = this.props


      return (
            <div onClick={this.handleShowDetails} className={`${style["movie-details"]}`}>
              <div className="movie-img-wrapper">
                <MovieImg movie={movie}/>
              </div>

                <div className="movie-description">
                  <div className="movie-name">Name: {movie.Title}</div>
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

const mapStateToProps = state => {
  return {
    // searchText: getSearchText(state),
    // error: getError(state),
    // movies: getMovies(state),
    isLoading: getLoadingStatus(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showMovieDetails: data => dispatch(showMovieDetails(data))
  };
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
