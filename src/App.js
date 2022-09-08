import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import BottomNavBar from "./components/BottomNavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInScreen />} />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
      <Route path="/welcome" element={<BottomNavBar />} />
    </Routes>
  );
}

export default App;
