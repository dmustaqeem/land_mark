// Button.stories.js|jsx

import React from "react";

import SignInScreen from "./SignInScreen";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Sign in screec",
  component: SignInScreen,
};

export const Primary = () => <SignInScreen />;
