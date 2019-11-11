import React, {Component} from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {connect} from "react-redux";
import {showFullDescription, showMovieDetails} from "./store/actions/moviesActions";
import MoviesList from "./components/movies-list/MoviesList";
import {
  getError,
  getLoadingStatus,
  getMovies,
  getSearchText,
  getSelectedMovieDetails, getShowFullDescriptionStatus,
  getShowMovieDetailsStatus
} from "./store/selectors";
import SearchBar from "./components/search/SearchBar";
import {Button, Modal} from "antd";
import Spinner from "./components/Spinner";
import MovieImg from "./components/movie-details/MovieImg";
import FullDescription from "./components/full-description";


class App extends Component {

  handleOk = () => {
    const {showMovieDetails, showFullDescription} = this.props;

    showMovieDetails(false);
    showFullDescription(false);
  };

  handleShowFullDescription = () => {
    const {showFullDescription} = this.props;
    showFullDescription(true);
  };

  handleHideFullDescription = () => {
    const {showFullDescription} = this.props;
    showFullDescription(false);
  };

  render() {
    const { isLoading, error, movies, showMovieDetailsStatus, selectedMovieDetails, showFullDescription, showFullDescriptionStatus} = this.props;

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
            title={selectedMovieDetails && selectedMovieDetails.Title}
            visible={showMovieDetailsStatus}
            footer={false}
            onCancel={this.handleOk}
          >
            {
              isLoading ? <Spinner/>
              :
                (
                  selectedMovieDetails &&
                  <div className="full-movie-details">
                    <MovieImg movie={selectedMovieDetails}/>
                    <div className="description-item">Year:</div><div> {selectedMovieDetails.Year}</div>

                    {
                      showFullDescriptionStatus &&
                      <FullDescription selectedMovieDetails={selectedMovieDetails} />
                    }

                    {
                      !showFullDescriptionStatus ?
                        <Button className="show-description-btn" onClick={this.handleShowFullDescription}>Show full description</Button>
                        :
                        <Button className="show-description-btn" onClick={this.handleHideFullDescription}>Hide full description</Button>
                    }
                  </div>
                )
            }

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
    selectedMovieDetails: getSelectedMovieDetails(state),
    showFullDescriptionStatus: getShowFullDescriptionStatus(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showMovieDetails: data => dispatch(showMovieDetails(data)),
    showFullDescription: data => dispatch(showFullDescription(data)),
  };
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

