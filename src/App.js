import React, {Component, Fragment} from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {updateSearch} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {getError, getLoadingStatus, getMovies, getSearchText} from "./store/selectors";
import SearchBar from "./components/search/SearchBar";
import Spinner from "./components/Spinner";


class App extends Component {


  render() {
    const { isLoading, error, movies } = this.props;
    console.log(movies);

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

            <h2>{error && error }</h2>

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

