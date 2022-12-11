import React, { Component } from "react";
import {
  Background,
  groupElements,
  headingStylePrimary,
  headingStyleSecondary,
  outlinedButtonStyle,
} from "../components/StyledComponents";
import { Typography } from "@mui/material";
import theme from "../Theme";
import Button from "@mui/material/Button";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import OptionsCard from "../components/OptionsCard";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { ReactComponent as ProfileCircle } from "../assets/svgs/profile-circle.svg";
import { ReactComponent as ActivityIcon } from "../assets/svgs/activity.svg";
import { ReactComponent as ClockIcon } from "../assets/svgs/clock.svg";
import { ReactComponent as InfoIcon } from "../assets/svgs/info-circle.svg";
import { ReactComponent as NotificationIcon } from "../assets/svgs/notification-bing.svg";
import { ReactComponent as RankingIcon } from "../assets/svgs/ranking.svg";

const iconBackground = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#E0F1F8",
  borderRadius: "10px",
  height: "40px",
  width: "40px",
  justifyContent: "center",
  alignItems: "center",
};
const MoreScreen = ({ setIsLoggedIn, setValue }) => {
  let navigate = useNavigate();
  const { height } = useWindowDimensions();

  return (
    <Background
      style={{
        justifyContent: "center",
        gap: theme.spacing(7),
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
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "29.59px",
              textAlign: "center",
            }}
          >
            More
          </Typography>
          <Typography style={headingStyleSecondary}>
            View & edit your profile, plus more!
          </Typography>
        </div>

        <div style={{ ...groupElements, gap: theme.spacing(4) }}>
          <OptionsCard
            label={"Notifications"}
            icon={
              <div style={iconBackground}>
                <NotificationIcon />
              </div>
            }
          />
          <OptionsCard
            label={"Profile"}
            icon={
              <div style={iconBackground}>
                <ProfileCircle />
              </div>
            }
            onClick={() => {
              setValue(5);
            }}
          />
          <OptionsCard
            label={"Achievements"}
            icon={
              <div style={iconBackground}>
                <RankingIcon />
              </div>
            }
          />
          <OptionsCard
            label={"Analytics"}
            icon={
              <div style={iconBackground}>
                <ActivityIcon />
              </div>
            }
          />
          <OptionsCard
            onClick={() => {
              setValue(7);
            }}
            label={"History"}
            icon={
              <div style={iconBackground}>
                <ClockIcon />
              </div>
            }
          />
          <OptionsCard
            label={"About"}
            icon={
              <div style={iconBackground}>
                <InfoIcon />
              </div>
            }
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
