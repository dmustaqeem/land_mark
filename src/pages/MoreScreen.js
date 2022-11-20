import React, { Component } from "react";
import styled from "styled-components";
import { MainDiv, Heading_SearchDiv } from "../components/StyledComponents";
import { Typography } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import StarsIcon from "@mui/icons-material/Stars";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import theme from "../Theme";
import Divider from "@mui/material/Divider";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  box-shadow: 0px 13px 13px -5px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  margin-bottom: 10px;
`;
const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  box-shadow: 0px 13px 13px -5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
  box-shadow: 0px 13px 13px -5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
const OptionRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 81px;
  padding-left: 18px;
  padding-right: 18px;
`;
const RightIcon = styled(ChevronRightRoundedIcon)`
  color: #9da7c0;
  font-weight: 900;
`;
const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  align-items: center;
  cursor: pointer;
`;
const OptionDivider = styled(Divider)`
  width: 90%;
`;

const MoreScreen = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  return (
    <MainDiv>
      <Heading_SearchDiv>
        <Typography variant="screen_heading">More</Typography>
        <Typography variant="more_under_heading">
          View & edit your profile, plus more!
        </Typography>
      </Heading_SearchDiv>
      <FirstContainer>
        <OptionRowDiv>
          <IconTextContainer>
            <NotificationsIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">Notifications</Typography>
          </IconTextContainer>
          <RightIcon />
        </OptionRowDiv>
        <OptionDivider style={theme.more_divider} variant="middle" />

        <OptionRowDiv>
          <IconTextContainer>
            <PersonIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">Profile</Typography>
          </IconTextContainer>
          <RightIcon />
        </OptionRowDiv>
        <OptionDivider style={theme.more_divider} variant="middle" />
        <OptionRowDiv>
          <IconTextContainer>
            <StarsIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">Achievements</Typography>
          </IconTextContainer>
          <RightIcon />
        </OptionRowDiv>
      </FirstContainer>
      <SecondContainer>
        <OptionRowDiv>
          <IconTextContainer>
            <HistoryIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">History</Typography>
          </IconTextContainer>
          <RightIcon />
        </OptionRowDiv>
        <OptionDivider style={theme.more_divider} variant="middle" />
        <OptionRowDiv>
          <IconTextContainer>
            <InfoIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">About</Typography>
          </IconTextContainer>
          <RightIcon />
        </OptionRowDiv>
      </SecondContainer>
      <ThirdContainer>
        <OptionRowDiv>
          <IconTextContainer
            onClick={async () => {
              try {
                const userSignout = await Auth.signOut();
                setIsLoggedIn(false);
                navigate("/");
                console.log("Sign out :", userSignout);
              } catch (error) {
                console.log("error signing out: ", error);
              }
            }}
          >
            <LogoutIcon style={theme.more_screen_icons_style} />
            <Typography variant="more_option_text">Logout</Typography>
          </IconTextContainer>
        </OptionRowDiv>
      </ThirdContainer>
    </MainDiv>
  );
};

export default MoreScreen;
