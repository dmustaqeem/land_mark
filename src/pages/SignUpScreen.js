// import React, { Component } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Logo1 from "../assets/images/LndMark_logo.svg";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockIcon from "@mui/icons-material/Lock";

import {
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import theme from "../Theme";
import {
  ButtonStyle,
  ClickTextLower,
  ColumnContainer,
  Error,
  HelpButton,
  iconStyle,
  ItemsCard,
  LinkStyle,
  Logo,
  LogoHeader,
  MainContainer,
  RowContainer,
  signUpHeadingStylePrimary,
  signUpHeadingStyleSecondary,
  StyledTextField,
  textFieldLabelStyle,
} from "../components/StyledComponents";
import { Formik } from "formik";
import * as yup from "yup";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Email: yup.string().email().required("Please enter a valid email"),
  Password: yup.string().required("Password error"),
  PasswordConfirmation: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),
});

const SignUpScreen = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  let navigate = useNavigate();
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
          Create Your Account For FREE!
        </Typography>
        <Typography style={signUpHeadingStyleSecondary}>
          Enter your information below to get signed up.
        </Typography>
      </ColumnContainer>
      <ItemsCard>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Email: "",
            Password: "",
            PasswordConfirmation: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { user } = await Auth.signUp({
                username: values.UserName,
                password: values.PasswordConfirmation,
                attributes: {
                  email: values.Email, // optional
                },
              });
              setSnackBarMessage("Success");
              setOpenSnackBar(true);
              setSeverity("success");
              console.log("sign up screen: ", user);
              resetForm();
              navigate("/confirmSignUp");
            } catch (error) {
              setSnackBarMessage("Error");
              setOpenSnackBar(true);
              setSeverity("error");
              console.log("error signing up:", error);
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
                  <EmailIcon style={iconStyle} />
                  <Typography style={textFieldLabelStyle}>Email</Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("Email")}
                  value={props.values.Email}
                  size="medium"
                  variant="outlined"
                />
                {props.errors.Email && props.touched.Email ? (
                  <Error>{props.errors.Email}</Error>
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

              <ColumnContainer>
                <RowContainer>
                  <LockIcon style={iconStyle} />
                  <Typography style={textFieldLabelStyle}>
                    Confirm Password
                  </Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("PasswordConfirmation")}
                  value={props.values.PasswordConfirmation}
                  type={"password"}
                  size="medium"
                  variant="outlined"
                />

                {props.errors.PasswordConfirmation &&
                props.touched.PasswordConfirmation ? (
                  <Error>{props.errors.PasswordConfirmation}</Error>
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
      </ItemsCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={signUpHeadingStyleSecondary}>
          By creating an account, you agree to our
        </Typography>
        <ClickTextLower style={LinkStyle} href="#">
          {"Terms & Privacy Policy"}
        </ClickTextLower>
      </div>

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
        Already have an account?{" "}
        <ClickTextLower style={LinkStyle} href="/">
          {"Log In"}
        </ClickTextLower>
      </Typography>
    </MainContainer>
  );
};
export default SignUpScreen;
