import React, { useEffect } from "react";
import "./style.scss";

const ShowDetails = ({ showId, show, fetchShow }) => {
  useEffect(() => {
    if (showId) {
      fetchShow({
        showId,
      });
    }
  }, [showId, fetchShow]);

  if (!show) {
    return "Loading";
  }

  const {
    name,
    summary,
    image: { medium, original },
    rating: { average },
    premiered,
    genres,
  } = show;

  return (
    <div className="show">
      <img src={medium} alt="Show poster" />
      <h1>
        {name} ({premiered.split("-")[0]}) {average}
      </h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowDetails;
