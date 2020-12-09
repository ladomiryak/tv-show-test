import React, { useEffect } from "react";
import { Loader, Alert } from "../../../shared";
import "./style.scss";

const ShowDetails = ({ error, showId, show, fetchShow }) => {
  // fetch Show Details
  useEffect(() => {
    if (showId && !show) {
      fetchShow({
        showId,
      });
    }
  }, [showId, show, fetchShow]);

  if (error) {
    return (
      <Alert variant="error">Something went wrong. Try later, please.</Alert>
    );
  }

  if (!show) {
    return <Loader />;
  }

  const {
    name,
    summary,
    image: { original },
    rating: { average },
    premiered,
    genres,
  } = show;

  return (
    <section className="show-details">
      <img className="show-details__poster" src={original} alt="Show poster" />
      <div>
        <h1 data-testid="show-name" className="show-details__title">
          {name} ({premiered.split("-")[0]}) {average}
        </h1>
        <ul className="show-details__genres">
          {genres.map((genre, i) => (
            <li key={genre}>
              {genre}
              {i < genres.length - 1 ? "," : ""}
            </li>
          ))}
        </ul>
        <p
          className="show-details__description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    </section>
  );
};

export default ShowDetails;
