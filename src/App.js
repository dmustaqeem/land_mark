// import React, { Component } from "react";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import awsmobile from "./aws-exports";
import { Auth, API, Storage } from "aws-amplify";
import ConfirmSignUp from "./pages/ConfirmSignUp";
import ForgotPasswordSubmitScreen from "./pages/ForgotPasswordSubmitScreen";
import { useEffect, useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
Auth.configure(awsmobile);
API.configure(awsmobile);
Storage.configure(awsmobile);

const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      let user = await Auth.currentAuthenticatedUser();

      if (user) {
        setIsLoggedIn(true);
        setUsername(user.signInUserSession.accessToken.payload.username);
        navigate("/welcome");
      } else {
        setIsLoggedIn(false);
      }
    };
    getCurrentUser();
  }, [loggedIn]);

  return (
    <Routes>
      <Route
        path="/"
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

      <Route element={<ProtectedRoute user={loggedIn} />}>
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
