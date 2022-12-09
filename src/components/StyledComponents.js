import React, { Component } from "react";
import styled from "styled-components";
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
  min-height: 215px;
  @media (max-height: 700px) {
    min-height: 170px;
  }
  gap: ${theme.spacing(4)};
`;
export const Error = styled.div`
  display: flex;
  color: red;
  font-size: 13px;
  align-self: center;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  align-items: center;
  height: 100vh;

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
  backgroundColor: theme.palette.primary.main,
  borderRadius: "12px",
  border: "0",
  fontWeight: 700,
  textTransform: "unset",
  width: "100%",
  height: "50px",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.00)",
};

// export const ButtonStyle = {
//   height: "50px",
//   BackgroundColor: "#0088DF",
//   borderRadius: "12px",
//   fontWeight: "600",
//   fontSize: "13px",
//   lineHeight: "20px",
//   textTransform: "unset",
// };
export const outlinedButtonStyle = {
  borderRadius: "12px",
  border: `1px solid ${theme.palette.primary.main}`,
  fontWeight: 700,
  textTransform: "unset",
  width: "200px",
  height: "50px",
  color: theme.palette.primary.main,
};

export const viewAllCardsButtonStyle = {
  textDecoration: "underline",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "20px",
  color: theme.palette.text.light_blue,
  textTransform: "unset",
};

export const cardRowHeading = {
  fontFamily: "Poppins",
  fontSize: 20,
  fontWeight: 900,
  color: "#00000",
};

export const StyledTextField = styled(Mui.TextField)`
  fieldset {
    border-radius: 14px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.palette.secondary.main} !important;
  }
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
  color: "#656565",
};
export const LinkStyle = {
  color: theme.palette.primary.main,
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  alignSelf: "center",
};

export const iconStyle = {
  color: theme.palette.primary.main,
  height: "20px",
  width: "20px",
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
