import { MainTypes } from "./types";
export const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case MainTypes.FETCH_SHOW_SUCCEEDED:
      return {
        ...state,
        show: action.payload,
      };
    case MainTypes.FETCH_SHOW_FAILED:
      return {
        ...state,
        show: null,
        error: action.payload,
      };

    case MainTypes.FETCH_SHOW_EPISODE_LIST_SUCCEEDED:
      return {
        ...state,
        episodeList: action.payload,
      };

    case MainTypes.FETCH_SHOW_EPISODE_LIST_FAILED:
      return {
        ...state,
        episodeList: null,
        error: action.payload,
      };

    case MainTypes.FETCH_SHOW_EPISODE_SUCCEEDED:
      return {
        ...state,
        episode: action.payload,
      };

    case MainTypes.FETCH_SHOW_EPISODE_FAILED:
      return {
        ...state,
        episode: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
