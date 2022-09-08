import styled from "styled-components";
import Background from "../assets/images/Background.png";
import PW_Icon from "../assets/images/Pw_Icon.svg";
import User_Icon from "../assets/images/User_Icon.svg";
import Logo1 from "../assets/images/LndMark_logo.svg";
import {
  Typography,
  CircularProgress,
  OutlinedInput,
  Link,
  Button,
} from "@mui/material";
import theme from "../Theme";
import Signup_Icon from "../assets/images/Signup_Icon.svg";
import Help_Icon from "../assets/images/Help_Icon.svg";
import { Formik } from "formik";
import * as yup from "yup";
import {
  LowerIcon,
  LowerButtonContainerDiv,
  BackgroundDiv,
  MainColDiv,
  Logo,
  TextFieldContainerRowDiv,
  TextfieldIconContainerDiv,
  TextfieldIcon,
  InputField,
  LowerRowDiv,
  ClickTextLower,
  ClickText,
} from "../components/StyledComponents";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Password: yup.string().required("Password error"),
});
const SignInScreen = () => {
  return (
    <BackgroundDiv>
      <MainColDiv>
        <Logo src={Logo1} />
        <Typography variant="login_blue_heading">
          Login to your account
        </Typography>
        <Typography variant="login_gray_heading">
          Enter your username and password to login.
        </Typography>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Password: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log("OnSubmit click", values);
            resetForm();
          }}
        >
          {(props) => (
            <>
              <TextFieldContainerRowDiv>
                <TextfieldIconContainerDiv>
                  <TextfieldIcon src={User_Icon} />
                </TextfieldIconContainerDiv>
                <InputField
                  onChange={props.handleChange("UserName")}
                  value={props.values.UserName}
                  sx={{ input: { color: "black" } }}
                  size="small"
                  placeholder="Username"
                />
              </TextFieldContainerRowDiv>
              <TextFieldContainerRowDiv>
                <TextfieldIconContainerDiv>
                  <TextfieldIcon src={PW_Icon} />
                </TextfieldIconContainerDiv>
                <InputField
                  onChange={props.handleChange("Password")}
                  value={props.values.Password}
                  type="password"
                  sx={{ input: { color: "black" } }}
                  size="small"
                  placeholder="Password"
                />
              </TextFieldContainerRowDiv>
              {!props.isSubmitting ? (
                <Button
                  sx={{ marginBottom: "10px" }}
                  style={theme.login_Button}
                  onClick={props.handleSubmit}
                >
                  Sign in
                </Button>
              ) : (
                <CircularProgress sx={{ alignSelf: "center" }} />
              )}
            </>
          )}
        </Formik>

        <ClickText href="/forgotpassword" underline="none">
          {"Forgot your password?"}
        </ClickText>
      </MainColDiv>
      <LowerRowDiv>
        <LowerButtonContainerDiv>
          <LowerIcon src={Signup_Icon} />
          <ClickTextLower
            style={theme.typography.clicktext_lower_blue}
            href="/signUp"
            underline="none"
          >
            {"Sign up"}
          </ClickTextLower>
        </LowerButtonContainerDiv>
        <LowerButtonContainerDiv>
          <LowerIcon src={Help_Icon} />
          <ClickTextLower
            style={theme.typography.clicktext_lower_blue}
            href="#"
            underline="none"
          >
            {"Help"}
          </ClickTextLower>
        </LowerButtonContainerDiv>
      </LowerRowDiv>
    </BackgroundDiv>
  );
};
export default SignInScreen;
