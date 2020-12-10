import React from "react";
import ShowEpisode from "../containers/ShowEpisode";
import { render, screen } from "../../../utils/testProvider";
import stateMock from "./mock.json";

describe("Show Episode", () => {
  test("Loader should be shown with empty state", () => {
    render(<ShowEpisode />, {
      initialState: { show: {} },
    });

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("Title should be shown", () => {
    const state = jest.fn(() => stateMock);

    const { container } = render(<ShowEpisode />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelector(".episode__title")).toBeInTheDocument();
    expect(container.querySelector(".episode__title").textContent).toBe(
      "Princess Buttercup"
    );
  });

  test("Poster should be shown", () => {
    const state = jest.fn(() => stateMock);
    const { container } = render(<ShowEpisode />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelector(".episode__poster")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Poster alt text should be provided", () => {
    const state = jest.fn(() => stateMock);

    const { container } = render(<ShowEpisode />, {
      initialState: {
        show: state(),
      },
    });

    expect(
      container.querySelector(".episode__poster").getAttribute("alt")
    ).toBe("Show poster");
  });

  test("Link back should be shown", () => {
    const state = jest.fn(() => stateMock);

    const { container } = render(<ShowEpisode />, {
      initialState: {
        show: state(),
      },
    });

    expect(container.querySelector(".link-back")).toBeInTheDocument();
  });
});
