import axios from "axios";
import CONSTANTS from "../../constants";

const { API } = CONSTANTS;

export const fetchShow = ({ showId }) =>
  axios.get(`${API.API_URL}/shows/${showId}`);

export const fetchShowEpisodeList = ({ showId }) =>
  axios.get(`${API.API_URL}/shows/${showId}/episodes`);

export const fetchShowEpisode = ({ showId, seasonNum, episodeNum }) =>
  axios.get(
    `${API.API_URL}/shows/${showId}/episodebynumber?season=${seasonNum}&number=${episodeNum}`
  );
