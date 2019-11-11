import React, { Component } from 'react'
import MovieDetails from '../movie-details/MovieDetails'
import style from "./MoviesList.module.scss"


class MoviesList extends Component {
  render() {

    const {movies} = this.props;

    console.log(movies);




    return (
      <div className={`${style["movies-list-wrapper"]}`}>

          <h1> Movies List</h1>
          {/*<div*/}
          {/*  // onClick={moviesStore.openAddMovieForm}*/}
          {/*  className="action-button add-button"*/}
          {/*>+Add Movie*/}
          {/*</div>*/}

        {
          movies.map((movie) => (
            <MovieDetails key={movie.id} movie={movie} />
          ))
        }


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
