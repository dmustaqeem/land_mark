import React, { Component } from "react";
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
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Code: yup.number(),
});
const ConfirmSignUp = () => {
  let navigate = useNavigate();
  return (
    <BackgroundDiv>
      <MainColDiv>
        <Logo src={Logo1} />
        <Typography variant="login_blue_heading">
          Login to your account
        </Typography>
        <Typography variant="login_gray_heading">
          Enter verification code to sign up.
        </Typography>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Code: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            console.log("OnSubmit click", values);
            resetForm();
            try {
              const confirmSignUp = await Auth.confirmSignUp(
                values.UserName,
                values.Code
              );
              console.log(confirmSignUp);
              navigate("/welcome");
            } catch (error) {
              console.log("error confirming sign up", error);
            }
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
                  onChange={props.handleChange("Code")}
                  value={props.values.Password}
                  sx={{ input: { color: "black" } }}
                  size="small"
                  placeholder="Verification code"
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

        <ClickText
          onClick={async () => {
            console.log("Resend verification code clicked");
            //    try {
            //     await Auth.resendSignUp();
            //     console.log('code resent successfully');
            // } catch (err) {
            //     console.log('error resending code: ', err);
            // }
          }}
          underline="none"
        >
          {"Resend verification code"}
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
export default ConfirmSignUp;
