// import React, { Component } from "react";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import awsmobile from "./aws-exports";
import { Auth } from "aws-amplify";
import ConfirmSignUp from "./pages/ConfirmSignUp";
import ForgotPasswordSubmitScreen from "./pages/ForgotPasswordSubmitScreen";
import { useEffect, useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";
Auth.configure(awsmobile);

const App = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      let user = await Auth.currentAuthenticatedUser();
      if (user) {
        setIsLoggedIn(true);
        navigate("/welcome");
      } else {
        setIsLoggedIn(false);
      }
    };
    getCurrentUser();
    console.log("App.js", loggedIn);
  }, [loggedIn]);

  return (
    <Routes>
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

      <Route element={<ProtectedRoute user={loggedIn} />}>
        <Route
          path="/welcome"
          element={<BottomNavBar setIsLoggedIn={setIsLoggedIn} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
