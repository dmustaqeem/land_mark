import React, { Component } from "react";
import styled from "styled-components";
import {
  Background,
  headingStylePrimary,
  headingStyleSecondary,
  outlinedButtonStyle,
} from "../components/StyledComponents";
import { Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import StarsIcon from "@mui/icons-material/Stars";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import theme from "../Theme";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import OptionsCard from "../components/OptionsCard";
import { useWindowDimensions } from "../utils/WindowWidthHeight";

const groupElements = {
  display: "flex",
  flexDirection: "column",
};
const MoreScreen = ({ setIsLoggedIn, setValue }) => {
  let navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  return (
    <Background
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(6),
        height: height - 74,
      }}
    >
      <div
        style={{
          ...groupElements,
          gap: theme.spacing(4),
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <div style={groupElements}>
          <Typography style={{ ...headingStylePrimary, color: "black" }}>
            More
          </Typography>
          <Typography style={headingStyleSecondary}>
            View & edit your profile, plus more!
          </Typography>
        </div>

        <div style={{ ...groupElements, gap: theme.spacing(4) }}>
          <OptionsCard
            label={"Notifications"}
            icon={<NotificationsIcon style={theme.more_screen_icons_style} />}
          />
          <OptionsCard
            label={"Profile"}
            icon={<PersonIcon style={theme.more_screen_icons_style} />}
            onClick={() => {
              setValue(5);
            }}
          />
          <OptionsCard
            label={"Achievements"}
            icon={<StarsIcon style={theme.more_screen_icons_style} />}
          />
          <OptionsCard
            label={"Analytics"}
            icon={<BarChartIcon style={theme.more_screen_icons_style} />}
          />
          <OptionsCard
            label={"History"}
            icon={<HistoryIcon style={theme.more_screen_icons_style} />}
          />
          <OptionsCard
            label={"About"}
            icon={<InfoIcon style={theme.more_screen_icons_style} />}
          />
        </div>
      </div>

      <Button
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
        style={outlinedButtonStyle}
        variant="outlined"
      >
        Log Out
      </Button>
    </Background>
  );
};

export default MoreScreen;
