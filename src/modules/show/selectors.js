const getShow = (state) => state.show.show;
const getShowEpisodeList = (state) => state.show.episodeList;
const getShowEpisode = (state) => state.show.episode;

export const showSelectors = {
  getShow,
  getShowEpisodeList,
  getShowEpisode,
};
