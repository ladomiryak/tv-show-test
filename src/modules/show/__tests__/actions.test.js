import * as actions from "../actions";
import { ShowTypes } from "../types";
import stateMock from "./mock.json";

describe("actions", () => {
  it("should create an action to fetch show", () => {
    const showId = "123";
    const expectedAction = {
      type: ShowTypes.FETCH_SHOW,
      payload: {
        showId,
      },
    };

    expect(actions.fetchShow({ showId })).toEqual(expectedAction);
  });

  it("should create an action for succeeded fetch show", () => {
    const state = jest.fn(() => stateMock);

    const expectedAction = {
      type: ShowTypes.FETCH_SHOW_SUCCEEDED,
      payload: {
        ...state().showDetails,
      },
    };

    expect(actions.fetchShowSucceeded({ ...state().showDetails })).toEqual(
      expectedAction
    );
  });
});
