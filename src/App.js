// import React, { Component } from "react";
import SignInScreen from "./screens/login-signup/SignInScreen";
import SignUpScreen from "./screens/login-signup/SignUpScreen";
import ForgotPasswordScreen from "./screens/login-signup/ForgotPasswordScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import awsmobile from "./aws-exports";
import { Auth, API, Storage } from "aws-amplify";
import ConfirmSignUp from "./screens/login-signup/ConfirmSignUp";
import ForgotPasswordSubmitScreen from "./screens/login-signup/ForgotPasswordSubmitScreen";
import { useEffect, useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
import UserProfile from "./screens/more-tab/UserProfile";
import SplashScreen from "./screens/SplashScreen";
import OnBoardingScreen from "./screens/OnboardingScreen";
import SuccessScreen from "./screens/SuccessScreen";
Auth.configure(awsmobile);
API.configure(awsmobile);
Storage.configure(awsmobile);

const App = () => {
  const [jwt, setJwt] = useState(localStorage.getItem("userJwt"));
  const [loggedIn, setIsLoggedIn] = useState(jwt ? true : false);
  console.log("logged in", loggedIn);
  return (
    <Routes>
      <Route element={<ProtectedRoute routeType={1} loggedIn={loggedIn} />}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onBoarding" element={<OnBoardingScreen />} />
        <Route
          path="/signIn"
          element={<SignInScreen setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signUp" element={<SignUpScreen />} />
        <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
        <Route
          path="/forgotpasswordsubmit"
          element={<ForgotPasswordSubmitScreen />}
        />
        <Route path="/success" element={<SuccessScreen />} />
        {/* <Route path="/confirmSignUp" element={<ConfirmSignUp />} /> */}
      </Route>
      <Route element={<ProtectedRoute routeType={2} loggedIn={loggedIn} />}>
        <Route element={<UserProfile />} />
        <Route
          path="/welcome"
          element={<BottomNavBar setIsLoggedIn={setIsLoggedIn} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
