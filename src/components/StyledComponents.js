import React, { Component } from "react";
import styled from "styled-components";
import Background from "../assets/images/Background.png";
import * as Mui from "@mui/material";
import theme from "../Theme";

export const TypographyRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const CardRowDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  /* height: fit-content; */
  padding-top: 5px;
  padding-bottom: 10px;
  gap: 12px;
`;
export const Error = styled.div`
  color: red;
  font-size: 13px;
`;

export const SubHeadingCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  margin-top: 20px;
`;

export const Heading_SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* position: absolute; */
  margin-bottom: 100px;
`;

export const Logo = styled.img`
  width: 190px;
  height: 59px;
  /* margin-bottom: 20px; */
`;

export const StyledTextField = styled(Mui.TextField)`
  fieldset {
    border-radius: 14px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  /* padding-top: ${theme.spacing(6)}; */
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #f3faff 0%, rgba(243, 250, 255, 0) 100%);
  justify-content: space-evenly;
`;

export const LogoHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing(2)};
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const socialButtonStyle = {
  height: 60,
  width: 60,
  borderRadius: 60,
  boxShadow: ` 0px 6px 30px rgba(30, 61, 83, 0.08)`,
};
export const HelpButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 43.5px;
  width: 43.5px;
  border-radius: 12px;
  border: 1px solid #dcecf6;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const signUpHeadingStylePrimary = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "25px",
  textAlign: "center",
  color: "#0088DF",
};
export const signUpHeadingStyleSecondary = {
  fontFamily: "Lato",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  color: "#8EA2AF",
};
export const textFieldLabelStyle = {
  fontFamily: "Lato",

  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "16px",
  color: " #656565",
};
export const LinkStyle = {
  color: "#0088df",
  fontSize: "14px",
  fontWeight: 600,
};

export const iconStyle = {
  color: "#0088DF",
  height: "20px",
  width: "20px",
};

export const ButtonStyle = {
  height: "50px",
  BackgroundColor: "#0088DF",
  borderRadius: "12px",
  fontWeight: "600",
  fontSize: "13px",
  lineHeight: "20px",
  textTransform: "unset",
};
export const ItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (max-width: 340px) {
    width: 310px;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: white;
  border-radius: 12px;
  gap: ${theme.spacing(5)};
  padding: ${theme.spacing(4)};
`;

export const ClickTextLower = styled(Mui.Link)`
  align-self: center;
  cursor: pointer;
`;
// export const InputField = styled(Mui.OutlinedInput)``;
