import React, { Component } from "react";
import Logo1 from "../assets/images/LndMark_logo.svg";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import LockIcon from "@mui/icons-material/Lock";
import { ReactComponent as PasswordIcon } from "../assets/svgs/passwordIcon.svg";
import { ReactComponent as ProfileIcon } from "../assets/svgs/profileIcon.svg";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Typography,
  CircularProgress,
  Button,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import theme from "../Theme";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Logo,
  Error,
  Background,
  LogoHeader,
  ColumnContainer,
  headingStylePrimary,
  headingStyleSecondary,
  CustomCard,
  RowContainer,
  iconStyle,
  textFieldLabelStyle,
  StyledTextField,
  LinkStyle,
  squareButtonIconStyle,
  solidButtonStyle,
} from "../components/StyledComponents";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SquareButton from "../components/SquareButton";

const ReviewSchema = yup.object({
  UserName: yup.string().required("Please Enter Username"),
  Code: yup.number().required(),
  NewPassword: yup.string().required("Password error"),
});
const ForgotPasswordSubmitScreen = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  let navigate = useNavigate();
  return (
    <Background
      style={{
        justifyContent: "space-evenly",
        padding: 0,
        gap: 0,
      }}
    >
      <LogoHeader>
        <div
          style={{
            height: "30px",
            width: "30px",
          }}
        ></div>
        <Logo src={Logo1} />
        <SquareButton>
          <QuestionMarkSharpIcon style={squareButtonIconStyle} />
        </SquareButton>
      </LogoHeader>
      <ColumnContainer
        style={{
          gap: theme.spacing(3),
        }}
      >
        <Typography style={headingStylePrimary}>
          Reset Your Password?
        </Typography>
        <Typography style={headingStyleSecondary}>
          Enter verification code along with new password.
        </Typography>
      </ColumnContainer>
      <CustomCard>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Code: "",
            NewPassword: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            // console.log("OnSubmit click", values);
            try {
              await Auth.forgotPasswordSubmit(
                values.UserName,
                `${values.Code}`,
                values.NewPassword
              );
              setSnackBarMessage("Success");
              setOpenSnackBar(true);
              setSeverity("success");
              resetForm();
              navigate("/");
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
                  <ProfileIcon />
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
              <ColumnContainer>
                <RowContainer>
                  <PasswordIcon />
                  <Typography style={textFieldLabelStyle}>
                    New Password
                  </Typography>
                </RowContainer>
                <StyledTextField
                  onChange={props.handleChange("NewPassword")}
                  value={props.values.NewPassword}
                  type={"password"}
                  size="medium"
                  variant="outlined"
                />

                {props.errors.NewPassword && props.touched.NewPassword ? (
                  <Error>{props.errors.NewPassword}</Error>
                ) : null}
              </ColumnContainer>
              {!props.isSubmitting ? (
                <Button
                  onClick={props.handleSubmit}
                  style={solidButtonStyle}
                  variant="contained"
                >
                  Submit
                </Button>
              ) : (
                <CircularProgress
                  sx={{ alignSelf: "center", margin: "10px" }}
                />
              )}
            </>
          )}
        </Formik>
      </CustomCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={headingStyleSecondary}>Read our</Typography>
        <Link style={LinkStyle} href="#">
          {"Terms & Privacy Policy"}
        </Link>
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
        <Link style={{ ...LinkStyle, fontWeight: "700" }} href="/">
          {"Log In"}
        </Link>
      </Typography>
    </Background>
  );
};
export default ForgotPasswordSubmitScreen;
