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
// import SuccessScreen from "./pages/SuccessScreen";
Auth.configure(awsmobile);
API.configure(awsmobile);
Storage.configure(awsmobile);

const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();

        if (user) {
          setIsLoggedIn(true);
          setUsername(user.username);
          //navigate("/welcome");
        }
      } catch (err) {
        setIsLoggedIn(false);
        console.log(err);
      }
    };
    getCurrentUser();
  }, [loggedIn]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route
        path="/onBoarding"
        element={<OnBoardingScreen setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route
        path="/signIn"
        element={<SignInScreen setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route
        path="/confirmSignUp"
        element={<ConfirmSignUp setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
      <Route
        path="/forgotpasswordsubmit"
        element={<ForgotPasswordSubmitScreen />}
      />
      {/* <Route path="/success/:type" element={<SuccessScreen />} /> */}

      <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
        <Route element={<UserProfile />} />
        <Route
          path="/welcome"
          element={
            <BottomNavBar username={username} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
