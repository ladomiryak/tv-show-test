import React from "react";
import ShowEpisodeList from "../containers/ShowEpisodeList";
import { render, screen } from "../test-util";
import stateMock from "./mock.json";

describe("Show Episode List", () => {
  test("Loader should be shown with empty state", () => {
    const { container } = render(<ShowEpisodeList />, {
      initialState: { show: {} },
    });

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Three seasons should be shown", () => {
    const state = jest.fn(() => stateMock);
    const { container } = render(<ShowEpisodeList />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelectorAll(".show-list__season").length).toEqual(3);
  });

  test("Season full episode list should be show", () => {
    const state = jest.fn(() => stateMock);
    const { container } = render(<ShowEpisodeList />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelectorAll(".show-list__item").length).toEqual(119);
  });

  test("Season third episode list should be show", () => {
    const state = jest.fn(() => stateMock);
    const { container } = render(<ShowEpisodeList showSeason={3} />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelectorAll(".show-list__item").length).toEqual(39);
    expect(container).toMatchSnapshot();
  });
});
