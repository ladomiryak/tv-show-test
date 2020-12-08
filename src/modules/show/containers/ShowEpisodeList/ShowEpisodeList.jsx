import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const ShowDetails = ({ showId, episodeList, fetchShowEpisodeList, show }) => {
  const [listFiltered, setListFiltered] = useState([]);

  useEffect(() => {
    if (showId) {
      fetchShowEpisodeList({
        showId,
      });
    }
  }, [showId, fetchShowEpisodeList]);

  useEffect(() => {
    if (episodeList) {
      setListFiltered(filteredBySeasonList(episodeList));
    }
  }, [episodeList]);

  if (!episodeList) {
    return "Loading";
  }

  const filteredBySeasonList = (items) =>
    items.reduce((acc, item) => {
      const index = item.season;
      const seasonItems = acc[index] ? [...acc[index], item] : [item];
      acc[index] = seasonItems;

      return acc;
    }, {});

  return (
    <div className="showList">
      {listFiltered &&
        Object.keys(listFiltered).map((key) => (
          <div key={key}>
            <span>Season: {key}</span>
            <ul>
              {listFiltered[key].map((episode) => (
                <li key={episode.name}>
                  <img src={episode?.image?.medium} alt="Episode poster" />
                  <h4>
                    <Link to={`/show/${showId}/episodes/${episode.id}`}>
                      {episode?.name}
                    </Link>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: episode?.summary }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ShowDetails;
