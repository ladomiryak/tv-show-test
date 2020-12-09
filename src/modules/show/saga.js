import { call, put, takeLatest } from "redux-saga/effects";
import { ShowTypes } from "./types";
import * as actions from "./actions";
import * as api from "./api";

// Fetch Show
export function* fetchShow(action) {
  try {
    const { payload } = action;

    const res = yield call(api.fetchShow, payload);

    yield put(actions.fetchShowSucceeded(res));
  } catch (ex) {
    yield put(actions.fetchShowFailed());
  }
}

// Fetch Show Episodes
export function* fetchShowEpisodeList(action) {
  try {
    const { payload } = action;

    const res = yield call(api.fetchShowEpisodeList, payload);

    yield put(actions.fetchShowEpisodeListSucceeded(res));
  } catch (ex) {
    yield put(actions.fetchShowEpisodeListFailed());
  }
}

// Fetch Show Episode
export function* fetchShowEpisode(action) {
  try {
    const { payload } = action;

    const res = yield call(api.fetchShowEpisode, payload);

    yield put(actions.fetchShowEpisodeSucceeded(res));
  } catch (ex) {
    yield put(actions.fetchShowEpisodeFailed());
  }
}

export default [
  takeLatest(ShowTypes.FETCH_SHOW, fetchShow),
  takeLatest(ShowTypes.FETCH_SHOW_EPISODE_LIST, fetchShowEpisodeList),
  takeLatest(ShowTypes.FETCH_SHOW_EPISODE, fetchShowEpisode),
];
