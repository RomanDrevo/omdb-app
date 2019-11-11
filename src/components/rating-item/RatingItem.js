import React from "react";

const RatingItem = ({rating}) => (
  <li>
    <div>Source: {rating.Source}</div>
    <div>Value: {rating.Value}</div>
  </li>
);

export default RatingItem;