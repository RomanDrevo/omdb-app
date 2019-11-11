import React, {Component} from 'react';
import style from './MovieDetails.module.scss';
import MovieImg from "./MovieImg";
import {getLoadingStatus} from "../../store/selectors";
import {fetchMovieDetails, showMovieDetails} from "../../store/actions/moviesActions";
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner";


class MovieDetails extends Component {

  handleOnClick = movieId => {
    const {showMovieDetails, fetchMovieDetails} = this.props;

    showMovieDetails(true);

    fetchMovieDetails(movieId);
  };

  render() {
    const {movie, isLoading} = this.props;

    if(isLoading || !movie) {
      return <div><Spinner/></div>;
    }

    return (
      <div onClick={() => this.handleOnClick(movie.Title)} className={`${style["movie-details"]}`}>
        <div className="movie-img-wrapper">
          <MovieImg movie={movie}/>
        </div>

        <div className="movie-description">
          <div className="movie-name">Name: {movie.Title}</div>
          <div className="movie-details">
            <h5 className="mr2">Year: <b>{movie.Year}</b></h5>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: getLoadingStatus(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showMovieDetails: data => dispatch(showMovieDetails(data)),
    fetchMovieDetails: data => dispatch(fetchMovieDetails(data)),
  };
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
