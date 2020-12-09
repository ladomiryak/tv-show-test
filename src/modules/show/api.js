import { baseApi } from "../../utils/apiService";
import CONSTANTS from "../../constants";

const { API } = CONSTANTS;

export const fetchShow = ({ showId }) =>
  baseApi.get(`/${API.SHOW_URL}/${showId}`);

export const fetchShowEpisodeList = ({ showId }) =>
  baseApi.get(`/${API.SHOW_URL}/${showId}/episodes`);

export const fetchShowEpisode = ({ showId, seasonNum, episodeNum }) =>
  baseApi.get(
    `/${API.SHOW_URL}/${showId}/episodebynumber?season=${seasonNum}&number=${episodeNum}`
  );
