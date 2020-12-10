import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails";
import ShowEpisodeList from "../ShowEpisodeList";
import { COMMON } from "../../../../constants";

const Show = () => {
  const [selectedShow, setSelectedShow] = useState(
    COMMON.SHOW_SELECTED_BY_DEFAULT
  );
  const { showId } = useParams();

  useEffect(() => {
    if (showId) {
      setSelectedShow(showId);
    }
  }, [showId]);

  return (
    <>
      <ShowDetails showId={selectedShow} />
      <ShowEpisodeList showId={selectedShow} />
    </>
  );
};

export default Show;
