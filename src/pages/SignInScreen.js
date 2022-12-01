import React, { Component } from "react";
import Logo1 from "../assets/images/LndMark_logo.svg";
import "@fontsource/lato";
import { Typography, CircularProgress, Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import theme from "../Theme";

import { Formik } from "formik";
import "@fontsource/lato";
import { SocialIcon } from "react-social-icons";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import * as yup from "yup";
import {
  Error,
  Logo,
  ClickTextLower,
  MainContainer,
  LogoHeader,
  HelpButton,
  ColumnContainer,
  signUpHeadingStylePrimary,
  signUpHeadingStyleSecondary,
  ItemsCard,
  RowContainer,
  iconStyle,
  textFieldLabelStyle,
  StyledTextField,
  ButtonStyle,
  LinkStyle,
  socialButtonStyle,
} from "../components/StyledComponents";
import { Auth } from "aws-amplify";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const SignInScreen = ({ setIsLoggedIn }) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const navigate = useNavigate();

  const ReviewSchema = yup.object({
    UserName: yup.string().required("Please Enter Username"),
    Password: yup.string().required("Password error"),
  });
  return (
    <MainContainer>
      <LogoHeader>
        <div
          style={{
            height: "30px",
            width: "30px",
          }}
        ></div>
        <Logo src={Logo1} />
        <HelpButton>
          <QuestionMarkSharpIcon
            style={{
              fontSize: "22px",
              color: "#9DA7C1",
            }}
          />
        </HelpButton>
      </LogoHeader>
      <ColumnContainer
        style={{
          gap: theme.spacing(3),
        }}
      >
        <Typography style={signUpHeadingStylePrimary}>
          Login to Your Account
        </Typography>
        <Typography style={signUpHeadingStyleSecondary}>
          Enter your username and password to login
        </Typography>
      </ColumnContainer>
      <ItemsCard>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Password: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            console.log("OnSubmit click", values);
            try {
              const user = await Auth.signIn(values.UserName, values.Password);
              setIsLoggedIn(true);
              setSnackBarMessage("Success");
              setOpenSnackBar(true);
              setSeverity("success");
              resetForm();
            } catch (error) {
              setSnackBarMessage("Error");
              setOpenSnackBar(true);
              setSeverity("error");
              console.log("error signing in", error);
            } finally {
              setSeverity("info");
            }
          }}
        >
          {(props) => (
            <>
              <ColumnContainer>
                <RowContainer>
                  <PersonRoundedIcon style={iconStyle} />
                  <Typography style={textFieldLabelStyle}>Username</Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("UserName")}
                  value={props.values.UserName}
                  size="medium"
                  variant="outlined"
                />
                {props.errors.UserName && props.touched.UserName ? (
                  <Error>{props.errors.UserName}</Error>
                ) : null}
              </ColumnContainer>
              <ColumnContainer>
                <RowContainer>
                  <LockIcon style={iconStyle} />
                  <Typography style={textFieldLabelStyle}>Password</Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("Password")}
                  value={props.values.Password}
                  type={"password"}
                  size="medium"
                  variant="outlined"
                />

                {props.errors.Password && props.touched.Password ? (
                  <Error>{props.errors.Password}</Error>
                ) : null}
              </ColumnContainer>

              {!props.isSubmitting ? (
                <Button
                  onClick={props.handleSubmit}
                  style={ButtonStyle}
                  variant="contained"
                >
                  Login
                </Button>
              ) : (
                <CircularProgress
                  sx={{ alignSelf: "center", margin: "10px" }}
                />
              )}
            </>
          )}
        </Formik>

        <ClickTextLower style={LinkStyle} href="/forgotpassword">
          {"Forgot Your Password?"}
        </ClickTextLower>
      </ItemsCard>
      <Typography style={signUpHeadingStyleSecondary}>or login with</Typography>
      <RowContainer
        style={{
          gap: theme.spacing(4),
        }}
      >
        <SocialIcon
          style={socialButtonStyle}
          network="facebook"
          bgColor="white"
          fgColor="#4E74C3"
        />
        <SocialIcon
          style={socialButtonStyle}
          network="twitter"
          bgColor="white"
          fgColor="#15B6FC"
        />
        <SocialIcon
          style={socialButtonStyle}
          network="google"
          bgColor="white"
          fgColor="blue"
        />
      </RowContainer>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        message={snackBarMessage}
        onClose={() => setOpenSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <Typography
        style={{
          fontSize: "16px",
          lineHeight: "19.79px",
        }}
      >
        Don’t have an account?{" "}
        <ClickTextLower style={LinkStyle} href="/signup">
          {"Sign Up"}
        </ClickTextLower>
      </Typography>
    </MainContainer>
  );
};
export default SignInScreen;
