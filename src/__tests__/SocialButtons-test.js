import * as React from "react";
import { render } from "@testing-library/react-native";
import each from "jest-each";

import SocialButtons from "../SocialButtons";

describe("SocialButtons", () => {
  it(`renders the basics`, async () => {
    const renderer = render(<SocialButtons type="facebook" testID="test-id" />);
    await renderer.getByTestId("test-id");
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  each([
    "facebook",
    "amazon",
    "linkedin",
    "google",
    "microsoft",
    "github",
    "twitter"
  ]).test(`render the button for %s`, async type => {
    const renderer = render(
      <SocialButtons type={type} testID={`${type}-button`} />
    );
    await renderer.getByTestId(`${type}-button`);
  });
});
