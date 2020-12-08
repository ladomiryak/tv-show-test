import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails";
import ShowEpisodeList from "../ShowEpisodeList";
import "./style.scss";

const Show = () => {
  const [selectedShow, setSelectedShow] = useState(6771);
  const { id } = useParams();

  useEffect(() => {
    if (id) setSelectedShow(id);
  }, [id]);

  return (
    <div>
      <ShowDetails showId={selectedShow} />
      <ShowEpisodeList showId={selectedShow} />
    </div>
  );
};

export default Show;
