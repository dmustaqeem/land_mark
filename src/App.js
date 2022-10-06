import React, { Component } from "react";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route } from "react-router-dom";
import awsmobile from "./aws-exports";
import { Auth } from "aws-amplify";
import ConfirmSignUp from "./pages/ConfirmSignUp";
import ForgotPasswordSubmitScreen from "./pages/ForgotPasswordSubmitScreen";
Auth.configure(awsmobile);

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInScreen />} />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="/confirmSignUp" element={<ConfirmSignUp />} />
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
      <Route
        path="/forgotpasswordsubmit"
        element={<ForgotPasswordSubmitScreen />}
      />

      <Route path="/welcome" element={<BottomNavBar />} />
    </Routes>
  );
}

export default App;
