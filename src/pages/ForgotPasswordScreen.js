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

const ClickButton = styled(Button)``;
const ButtonRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: fit-content;
  justify-content: space-between;
  margin-top: 15px;
`;
const ForgotPasswordScreen = () => {
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
        <TextFieldContainerRowDiv>
          <TextfieldIconContainerDiv>
            <TextfieldIcon src={Envelope_Open} />
          </TextfieldIconContainerDiv>
          <InputField
            size="small"
            placeholder="E-mail address"
            sx={{ input: { color: "black" } }}
          />
        </TextFieldContainerRowDiv>
        <ButtonRowDiv>
          <ClickButton style={theme.Submit_Button_blue}>Submit</ClickButton>
          <ClickButton style={theme.Submit_Button_gray}>Cancel</ClickButton>
        </ButtonRowDiv>
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
