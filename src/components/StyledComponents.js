import React, { Component } from "react";
import styled from "styled-components";
import Background from "../assets/images/Background.png";
import * as Mui from "@mui/material";
import theme from "../Theme";

export const TextButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;
export const CardRowDiv = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 215px;
  gap: ${theme.spacing(4)};
`;
export const Error = styled.div`
  color: red;
  font-size: 13px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  align-items: center;
  /* position: absolute; */
  background: linear-gradient(180deg, #f3faff 0%, rgba(243, 250, 255, 0) 100%);
  padding: ${theme.spacing(4)};
  gap: ${theme.spacing(3)};
`;

export const Logo = styled.img`
  width: 190px;
  height: 59px;
  /* margin-bottom: 20px; */
`;
export const solidButtonStyle = {
  backgroundColor: theme.palette.primary.light,
  borderRadius: "12px",
  border: "0",
  fontWeight: 700,
  textTransform: "unset",
  width: "169px",
  height: "42px",
};
export const outlinedButtonStyle = {
  borderRadius: "12px",
  border: "2px solid #0088DF",
  fontWeight: 700,
  textTransform: "unset",
  width: "200px",
  height: "50px",
};

export const viewAllCardsButtonStyle = {
  textDecoration: "underline",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#0088DF",
  textTransform: "unset",
};

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

export const headingStylePrimary = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "25px",
  textAlign: "center",
  color: theme.palette.text.light_blue,
};

export const squareButtonIconStyle = {
  fontSize: "22px",
  color: "#9DA7C1",
};
export const headingStyleSecondary = {
  fontFamily: "Lato",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  color: theme.palette.text.secondary,
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
export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
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
