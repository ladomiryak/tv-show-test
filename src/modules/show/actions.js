import { ShowTypes } from "./types";

// Fetch Single Show
export const fetchShow = (payload) => ({
  type: ShowTypes.FETCH_SHOW,
  payload,
});

export const fetchShowSucceeded = (payload) => ({
  type: ShowTypes.FETCH_SHOW_SUCCEEDED,
  payload,
});

export const fetchShowFailed = () => ({
  type: ShowTypes.FETCH_SHOW_FAILED,
});

// Fetch Show Episode List
export const fetchShowEpisodeList = (payload) => ({
  type: ShowTypes.FETCH_SHOW_EPISODE_LIST,
  payload,
});

export const fetchShowEpisodeListSucceeded = (payload) => ({
  type: ShowTypes.FETCH_SHOW_EPISODE_LIST_SUCCEEDED,
  payload,
});

export const fetchShowEpisodeListFailed = () => ({
  type: ShowTypes.FETCH_SHOW_EPISODE_LIST_FAILED,
});

// Fetch Show Single Episode
export const fetchShowEpisode = (payload) => ({
  type: ShowTypes.FETCH_SHOW_EPISODE,
  payload,
});

export const fetchShowEpisodeSucceeded = (payload) => ({
  type: ShowTypes.FETCH_SHOW_EPISODE_SUCCEEDED,
  payload,
});

export const fetchShowEpisodeFailed = () => ({
  type: ShowTypes.FETCH_SHOW_EPISODE_FAILED,
});
