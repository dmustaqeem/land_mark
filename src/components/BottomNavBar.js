import React, { Component } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import {
//   HouseTwoToneIcon,
//   PublicTwoToneIcon,
//   StarIcon,
//   MoreHorizIcon,
// } from "@mui/icons-material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
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
  border-top: 3px solid #0099F1;
  }
  height: 100%;
`);

const NavigationBottom = styled(BottomNavigation)`
  position: fixed;
  display: "flex";
  min-height: 100px;
  @media (max-height: 700px) {
    height: 70px;
  }
  align-items: center;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -9px 13px -7px rgba(0, 0, 0, 0.31);
`;

const iconStyle = {
  fontSize: "35px",
  paddingBottom: "1px",
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
          sx={{
            width: 10,
          }}
          label="Welcome"
          icon={<HomeRoundedIcon style={iconStyle} />}
        />

        <NavigationBottomAction
          label="Discover"
          icon={<PublicTwoToneIcon style={iconStyle} />}
        />
        <NavigationBottomAction
          style={{
            minWidth: "80px",
            maxWidth: "80px",
          }}
          icon={
            <div
              style={{
                display: "flex",
                backgroundColor: "#005D9E",
                height: "75%",
                width: "95%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
              }}
            >
              <AddIcon
                style={{
                  height: 40,
                  width: 40,
                  color: "white",
                }}
              />
            </div>
          }
        />

        <NavigationBottomAction
          label="Activate"
          icon={<StarRoundedIcon style={iconStyle} />}
        />
        <NavigationBottomAction
          label="More"
          icon={<MoreHorizIcon style={iconStyle} />}
        />
      </NavigationBottom>
    </>
  );
};
export default BottomNavBar;
