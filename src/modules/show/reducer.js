import { ShowTypes } from "./types";

export const defaultState = {
  showDetails: undefined,
  showEpisodeDetails: undefined,
  showEpisodeList: undefined,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ShowTypes.FETCH_SHOW_SUCCEEDED:
      return {
        ...state,
        showDetails: action.payload,
      };
    case ShowTypes.FETCH_SHOW_FAILED:
      return {
        ...state,
        showDetails: null,
        error: true,
      };

    case ShowTypes.FETCH_SHOW_EPISODE_LIST_SUCCEEDED:
      return {
        ...state,
        showEpisodeList: action.payload,
      };

    case ShowTypes.FETCH_SHOW_EPISODE_LIST_FAILED:
      return {
        ...state,
        showEpisodeList: null,
        error: true,
      };

    case ShowTypes.FETCH_SHOW_EPISODE:
      return {
        ...state,
        showEpisodeDetails: undefined,
      };

    case ShowTypes.FETCH_SHOW_EPISODE_SUCCEEDED:
      return {
        ...state,
        showEpisodeDetails: action.payload,
      };

    case ShowTypes.FETCH_SHOW_EPISODE_FAILED:
      return {
        ...state,
        showEpisodeDetails: null,
        error: true,
      };

    default:
      return state;
  }
};
