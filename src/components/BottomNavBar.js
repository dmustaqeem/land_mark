import React, { Component } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import {
//   HouseTwoToneIcon,
//   PublicTwoToneIcon,
//   StarIcon,
//   MoreHorizIcon,
// } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import WelcomeScreen from "../pages/WelcomeScreen";
import DiscoverScreen from "../pages/DiscoverScreen";
import MoreScreen from "../pages/MoreScreen";
import Activate from "../pages/ActivateScreen";
import UserProfile from "../pages/UserProfile";
import { ReactComponent as HomeIcon } from "../assets/svgs/homeIcon.svg";
import { ReactComponent as HomeBlueIcon } from "../assets/svgs/homeBlueIcon.svg";
import theme from "../Theme";

const NavigationBottomAction = styled(BottomNavigationAction)(`
  color: #9DA7C0;
  font-weight:700;
  min-width:50px;
    max-width:150px;
    padding: 0px;
  /* &.MuiButtonBase-root-MuiBottomNavigationAction-root {
    min-width:10px;
    max-width:10px;
  } */
  &.Mui-selected {
    color: ${theme.palette.primary.main};
  border-top: 3px solid ${theme.palette.primary.main};
  }
  height: 100%;
`);

const NavigationBottom = styled(BottomNavigation)`
  position: fixed;
  display: "flex";
  min-height: 74px;
  @media (max-height: 700px) {
    height: 70px;
  }
  align-items: center;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -9px 13px -7px rgba(0, 0, 0, 0.31);
`;

const RoundButton = styled("div")({
  display: "flex",
  backgroundColor: theme.palette.primary.dark,
  height: "75%",
  width: "71%",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  border: `2px solid ${theme.palette.secondary.main}`,
});
const iconStyle = {
  gap: theme.spacing(3),
  letterSpacing: "0.2px",
  minWidth: "fit-content",
};

const BottomNavBar = ({ setIsLoggedIn, username }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      {value == 0 ? (
        <WelcomeScreen username={username} />
      ) : value == 1 ? (
        <DiscoverScreen />
      ) : value == 3 ? (
        <Activate />
      ) : value == 4 ? (
        <MoreScreen setValue={setValue} setIsLoggedIn={setIsLoggedIn} />
      ) : value == 5 ? (
        <UserProfile setValue={setValue} />
      ) : null}

      <NavigationBottom
        showLabels={true}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // console.log(newValue);
        }}
      >
        <NavigationBottomAction
          style={{
            ...iconStyle,
            fontWeight: value === 0 ? 600 : 400,
          }}
          label="Welcome"
          icon={value === 0 ? <HomeBlueIcon /> : <HomeIcon />}
        />

        <NavigationBottomAction
          style={{
            ...iconStyle,
            fontWeight: value === 1 ? 600 : 400,
          }}
          label="Discover"
          icon={<PublicIcon />}
        />
        <NavigationBottomAction
          style={{
            minWidth: "80px",
            maxWidth: "80px",
          }}
          icon={
            <RoundButton>
              <AddIcon
                style={{
                  height: 30,
                  width: 30,
                  color: "white",
                }}
              />
            </RoundButton>
          }
        />

        <NavigationBottomAction
          style={{
            ...iconStyle,
            fontWeight: value === 3 ? 600 : 400,
          }}
          label="Activate"
          icon={<StarRoundedIcon />}
        />
        <NavigationBottomAction
          style={{
            ...iconStyle,
            fontWeight: value === 4 ? 600 : 400,
          }}
          label="More"
          icon={<MoreHorizIcon />}
        />
      </NavigationBottom>
    </>
  );
};
export default BottomNavBar;
