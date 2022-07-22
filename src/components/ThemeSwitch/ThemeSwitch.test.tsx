import React from "react";
import { render } from "@testing-library/react";

import { ThemeSwitch } from "./ThemeSwitch";

describe("ThemeSwitch", () => {
  test("renders the ThemeSwitch component", () => {
    render(<ThemeSwitch />);
  });
});