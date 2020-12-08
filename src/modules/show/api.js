import axios from "axios";
import CONSTANTS from "../../constants";

const { API } = CONSTANTS;

export const fetchShow = ({ showId }) =>
  axios.get(`${API.API_URL}/shows/${showId}`);

export const fetchShowEpisodeList = ({ showId }) =>
  axios.get(`${API}/shows/${showId}/episodes`);

export const fetchShowEpisode = ({ showId, seasonNumber, episodeNumber }) =>
  axios.get(
    `${API}/shows/${showId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`
  );
