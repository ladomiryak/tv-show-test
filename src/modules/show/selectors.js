const getShow = (state) => state.show.show;
const getShowEpisodeList = (state) => state.show.episodeList;
const getShowEpisode = (state) => state.show.episode;
const getError = (state) => state.show.error;

export const showSelectors = {
  getShow,
  getShowEpisodeList,
  getShowEpisode,
  getError,
};
