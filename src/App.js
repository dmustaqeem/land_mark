// import React, { Component } from "react";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import awsmobile from "./aws-exports";
import { Auth, API, Storage } from "aws-amplify";
import ConfirmSignUp from "./screens/ConfirmSignUp";
import ForgotPasswordSubmitScreen from "./screens/ForgotPasswordSubmitScreen";
import { useEffect, useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
import UserProfile from "./screens/UserProfile";
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
          navigate("/welcome");
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
