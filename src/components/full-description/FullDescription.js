import React, {Fragment} from "react";
import RatingItem from "../rating-item";

const FullDescription = ({selectedMovieDetails}) => console.log(selectedMovieDetails) || (
  <Fragment>
    <div className="description-item">Rated:</div><div> {selectedMovieDetails.Rated}</div>
    <div className="description-item">Released:</div><div> {selectedMovieDetails.Released}</div>
    <div className="description-item">Runtime:</div><div> {selectedMovieDetails.Runtime}</div>
    <div className="description-item">Genre:</div><div> {selectedMovieDetails.Genre}</div>
    <div className="description-item">Director:</div><div> {selectedMovieDetails.Director}</div>
    <div className="description-item">Writer:</div><div> {selectedMovieDetails.Writer}</div>
    <div className="description-item">Actors:</div><div> {selectedMovieDetails.Actors}</div>
    <div className="description-item">Plot:</div><div> {selectedMovieDetails.Plot}</div>
    <div className="description-item">Language:</div><div> {selectedMovieDetails.Language}</div>
    <div className="description-item">Country:</div><div> {selectedMovieDetails.Country}</div>
    <div className="description-item">Awards:</div><div> {selectedMovieDetails.Awards}</div>
    {
      selectedMovieDetails.Ratings &&
        <Fragment>
          <div className="description-item">Ratings: </div>
          <ul>
            {selectedMovieDetails.Ratings.map((rating, i) => <RatingItem key={i} rating={rating} />)}
          </ul>
        </Fragment>
    }

    <div className="description-item">Metascore:</div><div> {selectedMovieDetails.Metascore}</div>
    <div className="description-item">IMDB Rating:</div><div> {selectedMovieDetails.imdbRating}</div>
    <div className="description-item">IMDB Votes:</div><div> {selectedMovieDetails.imdbVotes}</div>
    <div className="description-item">DVD:</div><div> {selectedMovieDetails.DVD}</div>
    <div className="description-item">Production:</div><div> {selectedMovieDetails.Production}</div>
    <div className="description-item">Website:</div><div> {selectedMovieDetails.Website}</div>
    <div className="description-item">Released:</div><div> {selectedMovieDetails.Released}</div>
  </Fragment>
);

export default FullDescription;