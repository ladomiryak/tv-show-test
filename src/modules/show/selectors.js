const getShow = (state) => state.show.showDetails;
const getShowEpisodeList = (state) => state.show.showEpisodeList;
const getShowEpisode = (state) => state.show.showEpisodeDetails;
const getError = (state) => state.show.error;

export const showSelectors = {
  getShow,
  getShowEpisodeList,
  getShowEpisode,
  getError,
};
