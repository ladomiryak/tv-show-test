import reducer from "../reducer";
import { ShowTypes } from "../types";
import stateMock from "./mock.json";

describe("Show reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      showDetails: undefined,
      showEpisodeDetails: undefined,
      showEpisodeList: undefined,
      error: false,
    });
  });

  it("should handle FETCH_SHOW_SUCCEED", () => {
    const state = jest.fn(() => stateMock);

    expect(
      reducer([], {
        type: ShowTypes.FETCH_SHOW_SUCCEEDED,
        payload: state().showDetails,
      })
    ).toEqual({
      showDetails: state().showDetails,
    });
  });
});
