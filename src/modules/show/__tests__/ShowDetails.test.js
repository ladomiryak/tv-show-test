import React from "react";
import ShowDetails from "../containers/ShowDetails";
import { render, screen } from "../test-util";
import stateMock from "./mock.json";

describe("Show Details", () => {
  test("Loader should be shown with empty state", () => {
    render(<ShowDetails />, {
      initialState: { show: {} },
    });

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("Title should be shown", () => {
    const state = jest.fn(() => stateMock);

    render(<ShowDetails />, {
      initialState: {
        show: state(),
      },
    });

    expect(screen.getByTestId("show-name")).toBeInTheDocument();
    expect(screen.getByText("The Powerpuff Girls")).toBeInTheDocument();
  });

  test("Poster should be shown", () => {
    const state = jest.fn(() => stateMock);
    const { container } = render(<ShowDetails />, {
      initialState: {
        show: state(),
      },
    });

    expect(
      container.querySelector(".show-details__poster")
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Poster alt text should be provided", () => {
    const state = jest.fn(() => stateMock);

    const { container } = render(<ShowDetails />, {
      initialState: {
        show: state(),
      },
    });

    expect(
      container.querySelector(".show-details__poster").getAttribute("alt")
    ).toBe("Show poster");
  });
});
