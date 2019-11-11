import React, {Component, Fragment} from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {showMovieDetails, updateSearch} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {getError, getLoadingStatus, getMovies, getSearchText, getShowMovieDetailsStatus} from "./store/selectors";
import SearchBar from "./components/search/SearchBar";
import Spinner from "./components/Spinner";
import MovieDetails from "./components/movie-details/MovieDetails";
import {Modal} from "antd";


class App extends Component {

  handleOk = () => {
    const {showMovieDetails} = this.props

    showMovieDetails(false)
  }

  render() {
    const { isLoading, error, movies, showMovieDetailsStatus } = this.props;




    return (
      <div className={style["App"]}>
        <PageLayout>
          <header className="App-header">
            <div className="add-new-item-wrapper">

              <div className="search-item-wrapper">
                {
                  movies && movies.length > 0 &&
                  <SearchBar />

                }
              </div>
            </div>
          </header>
          <div className="main-page-content">
            {
              !movies &&
              <SearchBar centered />

            }

            {
              error &&
              <h2 className="error">{error }</h2>
            }

            {
              movies &&
              <MoviesList isLoading={isLoading} movies={movies} />
            }

          </div>

          <Modal
            title="Basic Modal"
            visible={showMovieDetailsStatus}
            // onOk={this.handleOk}
            footer={false}
            onCancel={this.handleOk}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </PageLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: getSearchText(state),
    error: getError(state),
    movies: getMovies(state),
    isLoading: getLoadingStatus(state),
    showMovieDetailsStatus: getShowMovieDetailsStatus(state),
    // selectedMovie: getSelectedMovie(state),
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
  )(App);

