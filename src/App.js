import React, {Component, Fragment} from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {updateSearch} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {getError, getLoadingStatus, getMovies, getSearchText} from "./store/selectors";
import SearchBar from "./components/search/SearchBar";
import Spinner from "./components/Spinner";
import MovieDetails from "./components/movie-details/MovieDetails";


class App extends Component {


  render() {
    const { isLoading, error, movies } = this.props;


    if(isLoading) {
      return <div><Spinner/></div>
    }

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
              <SearchBar />
            }

            {
              error &&
              <h2>{error }</h2>
            }

            {
              movies &&
              <MoviesList movies={movies} />
            }



          </div>
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
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // fetchItems: () => dispatch(fetchItems()),
    // updateSearch: data => dispatch(updateSearch(data))
  };
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

