import React, { Component } from "react";
import Logo1 from "../assets/images/LndMark_logo.svg";
import {
  Typography,
  CircularProgress,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import theme from "../Theme";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";
import * as yup from "yup";
import {
  Logo,
  ClickTextLower,
  Error,
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
} from "../components/StyledComponents";
import { Auth } from "aws-amplify";
import { useState } from "react";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Code: yup.number().required(),
});
const ConfirmSignUp = ({ setIsLoggedIn }) => {
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
          Verify Your Email
        </Typography>
        <Typography style={signUpHeadingStyleSecondary}>
          Enter your verification code sent to entered email address.
        </Typography>
      </ColumnContainer>
      <ItemsCard>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Code: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            console.log("OnSubmit click", values);
            try {
              const confirmSignUp = await Auth.confirmSignUp(
                values.UserName,
                values.Code
              );
              setSnackBarMessage("Success");
              setOpenSnackBar(true);
              setSeverity("success");
              console.log("ConfirmSign up : ", confirmSignUp);
              setIsLoggedIn(true);
              resetForm();
            } catch (error) {
              setSnackBarMessage("Error");
              setOpenSnackBar(true);
              setSeverity("error");
              console.log("error confirming sign up", error);
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
                  <VerifiedUserIcon style={iconStyle} />
                  <Typography style={textFieldLabelStyle}>
                    Verification Code
                  </Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("Code")}
                  value={props.values.Code}
                  size="medium"
                  variant="outlined"
                  type={"number"}
                />
                {props.errors.Code && props.touched.Code ? (
                  <Error>{props.errors.Code}</Error>
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

              <ClickTextLower
                onClick={async () => {
                  console.log("Resend verification code clicked");
                  if (props.values.UserName) {
                    try {
                      await Auth.resendSignUp(props.values.UserName);
                      console.log("code resent successfully");
                    } catch (err) {
                      console.log("error resending code: ", err);
                    }
                  } else {
                    setSnackBarMessage("Error. Enter username please.");
                    setOpenSnackBar(true);
                    setSeverity("error");
                  }
                }}
                // underline="none"
              >
                {"Resend verification code"}
              </ClickTextLower>
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
export default ConfirmSignUp;
