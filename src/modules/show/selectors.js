const getShow = (state) => state.show.show;
const getShowEpisodeList = (state) => state.show.episodes;
const getShowEpisode = (state) => state.show.episode;

export const showSelectors = {
  getShow,
  getShowEpisodeList,
  getShowEpisode,
};
