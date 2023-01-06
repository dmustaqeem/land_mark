import React, { Component, useEffect } from "react";
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
import WelcomeScreen from "../screens/bottom-navbar/WelcomeScreen";
import DiscoverScreen from "../screens/bottom-navbar/DiscoverScreen";
import MoreScreen from "../screens/bottom-navbar/MoreScreen";
import ActivateScreen from "../screens/bottom-navbar/ActivateScreen";
import UserProfile from "../screens/more-tab/UserProfile";
import { ReactComponent as HomeIcon } from "../assets/svgs/homeIcon.svg";
import { ReactComponent as HomeBlueIcon } from "../assets/svgs/homeBlueIcon.svg";
import FollowersScreen from "../screens/more-tab/FollowersScreen";
import theme from "../Theme";
import HistoryScreen from "../screens/more-tab/HistoryScreen";
import LndMrkExpView from "./LndmrkExpView";
import PaymentScreen from "../screens/payment-screen/PaymentScreen";
import CreateSessionScreen from "../screens/CreateSessionScreen";
import { loadStripe } from "@stripe/stripe-js";

import { useStripe } from "@stripe/react-stripe-js";
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
  box-shadow: 0px 15px 60px rgba(186, 174, 180, 0.3);
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
  fontFamily: theme.fontFamily,
};

const BottomNavBar = ({ setIsLoggedIn }) => {
  const [value, setValue] = useState(0);
  const [creditPack, setCreditPack] = useState();

  return (
    <>
      {value === 0 ? (
        <WelcomeScreen setValue={setValue} />
      ) : value === 1 ? (
        <DiscoverScreen setValue={setValue} />
      ) : value === 2 ? (
        <CreateSessionScreen setValue={setValue} />
      ) : value === 3 ? (
        <ActivateScreen setValue={setValue} />
      ) : value === 4 ? (
        <MoreScreen setValue={setValue} setIsLoggedIn={setIsLoggedIn} />
      ) : value === 5 ? (
        <UserProfile setCreditPack={setCreditPack} setValue={setValue} />
      ) : value === 6 ? (
        <FollowersScreen setValue={setValue} />
      ) : value === 7 ? (
        <HistoryScreen setValue={setValue} />
      ) : value === 20 ? (
        <LndMrkExpView setValue={setValue} />
      ) : value === 30 ? (
        <PaymentScreen setValue={setValue} creditPack={creditPack} />
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
            <RoundButton id="step3">
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
