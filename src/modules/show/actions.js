import { MainTypes } from "./types";

// Fetch Single Show
export const fetchShow = (payload) => ({
  type: MainTypes.FETCH_SHOW,
  payload,
});

export const fetchShowSucceeded = (payload) => ({
  type: MainTypes.FETCH_SHOW_SUCCEEDED,
  payload,
});

export const fetchShowFailed = () => ({
  type: MainTypes.FETCH_SHOW_FAILED,
});

// Fetch Show Episode List
export const fetchShowEpisodeList = (payload) => ({
  type: MainTypes.FETCH_SHOW_EPISODE_LIST,
  payload,
});

export const fetchShowEpisodeListSucceeded = (payload) => ({
  type: MainTypes.FETCH_SHOW_EPISODE_LIST_SUCCEEDED,
  payload,
});

export const fetchShowEpisodeListFailed = () => ({
  type: MainTypes.FETCH_SHOW_EPISODE_LIST_FAILED,
});

// Fetch Single Show Episode
export const fetchShowEpisode = (payload) => ({
  type: MainTypes.FETCH_SHOW_EPISODE,
  payload,
});

export const fetchShowEpisodeSucceeded = (payload) => ({
  type: MainTypes.FETCH_SHOW_EPISODE_SUCCEEDED,
  payload,
});

export const fetchShowEpisodeFailed = () => ({
  type: MainTypes.FETCH_SHOW_EPISODE_FAILED,
});
