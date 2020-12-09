import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Loader, Alert } from "../../../shared";
import ShowEpisodeList from "../ShowEpisodeList";
import "./style.scss";

const ShowEpisode = ({ error, episode, fetchShowEpisode }) => {
  const { showId, episodeNum, seasonNum } = useParams();

  // fetch Episode Details
  useEffect(() => {
    if (showId && episodeNum && seasonNum) {
      fetchShowEpisode({
        showId,
        episodeNum,
        seasonNum,
      });
    }
  }, [showId, episodeNum, seasonNum, fetchShowEpisode]);

  if (error) {
    return (
      <Alert variant="error">Something went wrong. Try later, please.</Alert>
    );
  }

  if (!episode) {
    return <Loader />;
  }

  const { name, summary, season, number, image, airdate } = episode;

  return (
    <section>
      <Link className="link-back" to={`/show/${showId}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 64 64"
          width="24"
        >
          <path d="M54 30H14.101l15.278-14.552a2 2 0 10-2.759-2.897L9.172 29.171A3.978 3.978 0 008 32c0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552a1.999 1.999 0 001.38-3.448L14.038 34H54a2 2 0 000-4z" />
        </svg>{" "}
        Go back to show
      </Link>
      <div className="episode">
        {image && (
          <img
            className="episode__poster"
            src={image.medium}
            alt="Show poster"
          />
        )}
        <div>
          <h1 className="episode__title">{name}</h1>
          <div className="episode__info">
            Episode: {number} ({dayjs(airdate).format("MMMM DD YYYY")})
          </div>
          <p
            className="episode__description"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      </div>
      <ShowEpisodeList showId={showId} showSeason={season} />
    </section>
  );
};

export default ShowEpisode;
