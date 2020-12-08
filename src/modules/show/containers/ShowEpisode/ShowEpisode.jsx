import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

const ShowEpisode = ({ error, episode, fetchShowEpisode }) => {
  const { showId, episodeNum, seasonNum } = useParams();

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
    return "Something went wrong. Try later, please.";
  }

  if (!episode) {
    return "Loading";
  }

  const { name, summary, season, number, image } = episode;

  return (
    <div className="show">
      {image && <img src={image.medium} alt="Show poster" />}
      <h1>{name}</h1>
      Season: {season} / Episode: {number}
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowEpisode;
