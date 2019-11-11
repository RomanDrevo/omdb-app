import React, { Component } from 'react'
import './MoviesList.css'
import MovieDetails from '../movie-details/MovieDetails'



class MoviesList extends Component {
  render() {

    const {movies} = this.props;

    console.log(movies);

    const movie = {
      hour: 12,
      category: "lalala",
      rate: 666,
      year: 1984,
      description: "adsrljgdkjgkdjrhg"
    }


    return (
      <div>
        <div className="flex justify-between items-baseline mt4 mb4">
          <h1> Movies List</h1>
          {/*<div*/}
          {/*  // onClick={moviesStore.openAddMovieForm}*/}
          {/*  className="action-button add-button"*/}
          {/*>+Add Movie*/}
          {/*</div>*/}
        </div>
        {/*{*/}
        {/*  filteredMovies.map((movie) => (*/}
        {/*    <MovieDetails key={movie.id} movie={movie} />*/}
        {/*  ))*/}
        {/*}*/}

        <MovieDetails movie={movie} />

        {/*{*/}
        {/*  moviesStore.isEditMovieFormOpen ?*/}
        {/*    <EditMoviesModal />*/}
        {/*    :*/}
        {/*    null*/}
        {/*}*/}

        {/*{*/}
        {/*  moviesStore.isAddMovieFormOpen ?*/}
        {/*    <AddMovieModal />*/}
        {/*    :*/}
        {/*    null*/}
        {/*}*/}

        {/*<SweetAlert*/}
        {/*  warning*/}
        {/*  showCancelButton*/}
        {/*  show={moviesStore.isRemoveMovieSwalOpen}*/}
        {/*  title="Are you sure?"*/}
        {/*  text=""*/}
        {/*  onConfirm={() => moviesStore.removeMovie(moviesStore.selectedMovie)}*/}
        {/*  cancelButtonText="No, keep it"*/}
        {/*  onCancel={moviesStore.closeRemoveMovieSwal}*/}
        {/*/>*/}

        {/*<SweetAlert*/}
        {/*  warning*/}
        {/*  showCancelButton={false}*/}
        {/*  show={moviesStore.isMovieExistSwalOpen}*/}
        {/*  title="Movie with this name already exists!"*/}
        {/*  text=""*/}
        {/*  onConfirm={moviesStore.closeMovieExistSwal}*/}
        {/*/>*/}

      </div>
    )
  }
}

export default MoviesList
