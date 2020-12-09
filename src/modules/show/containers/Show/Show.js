import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails";
import ShowEpisodeList from "../ShowEpisodeList";

const Show = () => {
  const [selectedShow, setSelectedShow] = useState("6771");
  const { showId } = useParams();

  useEffect(() => {
    if (showId) setSelectedShow(showId);
  }, [showId]);

  return (
    <>
      <ShowDetails showId={selectedShow} />
      <ShowEpisodeList showId={selectedShow} />
    </>
  );
};

export default Show;
