import React, { Component } from "react";
import styled from "styled-components";
import {
  MainDiv,
  signUpHeadingStylePrimary,
  signUpHeadingStyleSecondary,
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

const groupElements = {
  display: "flex",
  flexDirection: "column",
};
const MoreScreen = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();
  return (
    <MainDiv
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(6),
        height: "100vh",
      }}
    >
      <div style={{ ...groupElements, gap: theme.spacing(4) }}>
        <div style={groupElements}>
          <Typography style={{ ...signUpHeadingStylePrimary, color: "black" }}>
            More
          </Typography>
          <Typography style={signUpHeadingStyleSecondary}>
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
        style={{
          borderRadius: "12px",
          border: "2px solid #0088DF",
          fontWeight: 700,
          textTransform: "unset",
          width: "200px",
          height: "50px",
        }}
        variant="outlined"
      >
        Log Out
      </Button>
    </MainDiv>
  );
};

export default MoreScreen;
