import styled from "styled-components";
import PW_Icon from "../assets/images/Pw_Icon.svg";
import User_Icon from "../assets/images/User_Icon.svg";
import Envelope_Close from "../assets/images/Envelope_Close_Icon.svg";
import Logo1 from "../assets/images/LndMark_logo.svg";
import {
  Typography,
  OutlinedInput,
  Link,
  Button,
  CircularProgress,
} from "@mui/material";
import theme from "../Theme";
import User_Icon2 from "../assets/images/User_Icon2.svg";
import Help_Icon from "../assets/images/Help_Icon.svg";
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
import { Formik } from "formik";
import * as yup from "yup";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Email: yup.string().email("Please enter a valid email"),
  Password: yup.string().required("Password error"),
});

const SignUpScreen = () => {
  return (
    <BackgroundDiv>
      <MainColDiv>
        <Logo src={Logo1} />
        <Typography variant="login_blue_heading">
          Create your account for FREE!
        </Typography>
        <Typography variant="login_gray_heading">
          Enter your information below to get started.
        </Typography>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Email: "",
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
                  <TextfieldIcon src={Envelope_Close} />
                </TextfieldIconContainerDiv>
                <InputField
                  onChange={props.handleChange("Email")}
                  value={props.values.Email}
                  sx={{ input: { color: "black" } }}
                  size="small"
                  placeholder="Email"
                />
              </TextFieldContainerRowDiv>
              <TextFieldContainerRowDiv>
                <TextfieldIconContainerDiv>
                  <TextfieldIcon src={PW_Icon} />
                </TextfieldIconContainerDiv>
                <InputField
                  type="password"
                  onChange={props.handleChange("Password")}
                  value={props.values.Password}
                  sx={{ input: { color: "black" } }}
                  size="small"
                  placeholder="Password"
                />
              </TextFieldContainerRowDiv>
              {!props.isSubmitting ? (
                <Button
                  sx={{ marginBottom: "10px" }}
                  style={theme.login_Button}
                  type="submit"
                  onClick={props.submitForm}
                >
                  Create Account
                </Button>
              ) : (
                <CircularProgress sx={{ alignSelf: "center" }} />
              )}
            </>
          )}
        </Formik>

        <Typography variant="login_gray_heading">
          By creating an account, you agree to our
          <ClickText href="#" underline="none">
            {" Terms & Privacy Policy."}
          </ClickText>
        </Typography>
      </MainColDiv>
      <LowerRowDiv>
        <LowerButtonContainerDiv>
          <LowerIcon src={User_Icon2} />
          <ClickTextLower
            style={theme.typography.clicktext_lower_blue}
            href="/signIn"
            underline="none"
          >
            {"Login"}
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
export default SignUpScreen;
