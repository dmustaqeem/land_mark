import styled from "styled-components";
import Background from "../assets/images/Background.png";
import * as Mui from "@mui/material";

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
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 10px;
  gap: 12px;
`;
export const SubHeadingCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

export const Heading_SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-left: 25px;
  padding-right: 25px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
`;

export const BackgroundDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  position: absolute;
  background-attachment: fixed;
  background-size: cover;
  justify-content: space-around;
  align-items: center;
`;
export const MainColDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  max-width: 290px;
  align-items: center;
  justify-content: center;
`;
export const LowerRowDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 5%;
  width: 95%;
`;
export const Logo = styled.img`
  width: 80%;
  margin-bottom: 20px;
`;
export const LowerButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80px;
  justify-content: center;
  align-items: center;
`;
export const LowerIcon = styled.img`
  height: 35%;
  width: 35%;
  color: #005d9e;
`;

export const TextFieldContainerRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  margin-top: 20px;
`;
export const TextfieldIcon = styled.img`
  background-color: #005d9e;
  height: 50%;
`;
export const TextfieldIconContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #005d9e;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
`;
export const ClickText = styled(Mui.Link)`
  font-family: "Lato";
  font-weight: 400;
  font-size: 10px;
  color: #005d9e;
`;

export const ClickTextLower = styled(Mui.Link)``;
export const InputField = styled(Mui.OutlinedInput)`
  background-color: white;
`;
