import React, { Component } from "react";
import Logo1 from "../assets/images/LndMark_logo.svg";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Typography,
  CircularProgress,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import theme from "../Theme";
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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
          Reset Your Password?
        </Typography>
        <Typography style={signUpHeadingStyleSecondary}>
          Enter verification code along with new password.
        </Typography>
      </ColumnContainer>
      <ItemsCard>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            UserName: "",
            Code: "",
            NewPassword: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            console.log("OnSubmit click", values);
            try {
              await Auth.forgotPasswordSubmit(
                values.UserName,
                values.Code,
                values.NewPassword
              )
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
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
              <ColumnContainer>
                <RowContainer>
                  <LockIcon style={iconStyle} />
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
                  style={ButtonStyle}
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
      </ItemsCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={signUpHeadingStyleSecondary}>Read our</Typography>
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
export default ForgotPasswordSubmitScreen;
