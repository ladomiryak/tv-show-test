import React, { useState, useEffect } from "react";
import { groupBy } from "../../../../utils/common";
import { Loader, Alert } from "../../../shared";
import { Link } from "react-router-dom";
import "./style.scss";

const ShowEpisodeList = ({
  error,
  showId,
  episodeList,
  fetchShowEpisodeList,
  showSeason,
}) => {
  const [listFiltered, setListFiltered] = useState([]);

  // fetch Episode List
  useEffect(() => {
    if (showId && !episodeList) {
      fetchShowEpisodeList({
        showId,
      });
    }
  }, [showId, fetchShowEpisodeList, episodeList]);

  // Group Episode list by season
  useEffect(() => {
    if (episodeList) {
      setListFiltered(groupBy(episodeList, "season"));
    }
  }, [episodeList]);

  // Render Episode Item
  const EpisodeItem = ({ name, season, number, image }) => (
    <li className="show-list__item">
      <Link
        to={`/show/${showId}/season/${season}/episode/${number}`}
        className="show-list__item-link"
      >
        <img
          src={
            image?.medium ||
            "https://via.placeholder.com/220x120/FFFFFF/000000?Text=Poster"
          }
          alt="Episode poster"
          className="show-list__item-poster"
        />

        <h4 className="show-list__item-title">{name}</h4>
      </Link>
    </li>
  );

  if (error) {
    return (
      <Alert variant="error">Something went wrong. Try later, please.</Alert>
    );
  }

  if (!episodeList) {
    return <Loader />;
  }

  return (
    <ul>
      {showSeason && listFiltered[showSeason] ? (
        // Show Selected Season Episode list
        <li className="show-list">
          <span className="show-list__season">Season: {showSeason}</span>
          <ul className="show-list__items">
            {listFiltered[showSeason].map((episode) => (
              <EpisodeItem key={episode.number} {...episode} />
            ))}
          </ul>
        </li>
      ) : (
        // Show full Episode List
        Object.keys(listFiltered).map((key) => (
          <li className="show-list" key={key}>
            <span className="show-list__season">Season: {key}</span>
            <ul className="show-list__items">
              {listFiltered[key].map((episode) => (
                <EpisodeItem key={episode.number} {...episode} />
              ))}
            </ul>
          </li>
        ))
      )}
    </ul>
  );
};

export default ShowEpisodeList;
