import React, { Component } from "react";
import styled from "styled-components";
import Envelope_Open from "../assets/images/Envelope_Open_Icon.svg";
import Logo1 from "../assets/images/LndMark_logo.svg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
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
} from "../components/StyledComponents";
import { Auth } from "aws-amplify";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const ClickButton = styled(Button)``;
const ButtonRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: fit-content;
  justify-content: space-between;
  margin-top: 15px;
`;

const ReviewSchema = yup.object({
  Email: yup.string().required("Please Enter Username"),
});
const ForgotPasswordScreen = () => {
  let navigate = useNavigate();

  return (
    <BackgroundDiv>
      <MainColDiv>
        <Logo src={Logo1} />
        <Typography variant="login_blue_heading">
          Forgot your Password?
        </Typography>
        <Typography variant="login_gray_heading">
          Enter your email below to reset your password.
        </Typography>
        <Formik
          validationSchema={ReviewSchema}
          initialValues={{
            Email: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            console.log("OnSubmit click", values);
            try {
              await Auth.forgotPassword(values.Email)
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
              navigate("/forgotpasswordsubmit");
              resetForm();
            } catch (error) {
              console.log("Forgot Password error : ", error);
            }
          }}
        >
          {(props) => {
            <>
              <TextFieldContainerRowDiv>
                <TextfieldIconContainerDiv>
                  <TextfieldIcon src={Envelope_Open} />
                </TextfieldIconContainerDiv>
                <InputField
                  onChange={props.handleChange("Email")}
                  value={props.values.Email}
                  size="small"
                  placeholder="E-mail address"
                  sx={{ input: { color: "black" } }}
                />
              </TextFieldContainerRowDiv>
              <ButtonRowDiv>
                <ClickButton
                  onClick={props.handleSubmit}
                  style={theme.Submit_Button_blue}
                >
                  Submit
                </ClickButton>
                <ClickButton style={theme.Submit_Button_gray}>
                  Cancel
                </ClickButton>
              </ButtonRowDiv>
            </>;
          }}
        </Formik>
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
export default ForgotPasswordScreen;
