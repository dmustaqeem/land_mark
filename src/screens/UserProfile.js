import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import SquareButton from "../components/SquareButton";
import ShareIcon from "@mui/icons-material/Share";
import { ReactComponent as CoinsIcon } from "../assets/svgs/coinsIcon.svg";
import { ReactComponent as ArrowLeftIcon } from "../assets/svgs/arrow-left.svg";
import { ReactComponent as Achievement1 } from "../assets/svgs/achievement1.svg";
import { ReactComponent as Achievement2 } from "../assets/svgs/achievement2.svg";
import { ReactComponent as Achievement3 } from "../assets/svgs/achievement3.svg";
import { ReactComponent as Achievement4 } from "../assets/svgs/achievement4.svg";

import {
  CustomCard,
  Background,
  headingStylePrimary,
  headingStyleSecondary,
  squareButtonIconStyle,
  TextButtonRow,
  viewAllCardsButtonStyle,
  CardRowDiv,
  solidButtonStyle,
  cardRowHeading,
  SemiHeader,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import theme from "../Theme";
import { DummyData } from "../DummyData";
import LndMrkCard from "../components/LndMrkCard";
import AvatarDummy from "../assets/images/AvatarDummy.png";

const SocialInfoContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: ${theme.spacing(2)};
`;
const achievementBackground = {
  display: "flex",
  height: "60px",
  width: "60px",
  flexDirection: "column",
  backgroundColor: "#E0F1F8",
  borderRadius: "100%",
  justifyContent: "center",
  alignItems: "center",
};
const infoNumberStyle = {
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#000000",
};
const UserProfile = ({ setValue }) => {
  const { height } = useWindowDimensions();
  return (
    <Background style={{ height: height - 74, justifyContent: "space-evenly" }}>
      <SemiHeader>
        <SquareButton
          onClick={() => {
            setValue(4);
          }}
        >
          <ArrowLeftIcon />
        </SquareButton>
        <Typography
          style={{
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "29.59px",
            textAlign: "center",
          }}
        >
          Profile
        </Typography>
        <SquareButton>
          <ShareIcon style={squareButtonIconStyle} />
        </SquareButton>
      </SemiHeader>

      <CustomCard
        style={{
          alignItems: "center",
          gap: theme.spacing(4),
          maxWidth: "100%",
          boxShadow: "0px 6px 30px rgba(30, 61, 83, 0.08)",
          filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.0))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingBottom: theme.spacing(4),
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundImage: `url(${AvatarDummy})`,
              backgroundSize: "cover",
              borderRadius: "100%",
              height: "106px",
              width: "106px",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: theme.palette.primary.dark,
                width: "74px",
                height: "32px",
                borderRadius: "60px",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: theme.spacing(2),
                position: "absolute",
                bottom: -15,
              }}
            >
              <CoinsIcon />
              <Typography
                style={{
                  fontSize: "14px",
                }}
              >
                510
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "57%",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography
              style={{
                ...headingStylePrimary,
                fontSize: "22px",
                color: "#000000",
              }}
            >
              Jane Wu
            </Typography>
            <Typography
              style={{
                ...headingStyleSecondary,
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              Personal Creator
            </Typography>
            <Button
              variant="contained"
              style={{ ...solidButtonStyle, height: "42px", width: "95%" }}
            >
              Follow
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "68px",
            borderTop: `1px solid ${theme.palette.secondary.main}`,
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <SocialInfoContainer
            style={{
              flex: 2,
            }}
          >
            <Typography style={headingStyleSecondary}>Likes</Typography>
            <Typography style={infoNumberStyle}>22.2K</Typography>
          </SocialInfoContainer>
          <SocialInfoContainer
            onClick={() => {
              setValue(6);
            }}
            style={{
              flex: 3,
              cursor: "pointer",
              borderLeft: `1px solid ${theme.palette.secondary.main}`,
              borderRight: `1px solid ${theme.palette.secondary.main}`,
            }}
          >
            <Typography style={headingStyleSecondary}>Followers</Typography>
            <Typography style={infoNumberStyle}>3.6K</Typography>
          </SocialInfoContainer>
          <SocialInfoContainer
            style={{
              flex: 2,
            }}
          >
            <Typography style={headingStyleSecondary}>Published</Typography>
            <Typography style={infoNumberStyle}>102</Typography>
          </SocialInfoContainer>
        </div>
        <Typography
          style={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#000000",
            alignSelf: "flex-start",
            letterSpacing: "0",
          }}
        >
          Achievements
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div style={achievementBackground}>
            <Achievement4 />
          </div>
          <div style={achievementBackground}>
            <Achievement3 />
          </div>{" "}
          <div style={achievementBackground}>
            <Achievement2 />
          </div>{" "}
          <div style={achievementBackground}>
            <Achievement1 />
          </div>{" "}
        </div>
      </CustomCard>
      <TextButtonRow>
        <Typography style={cardRowHeading}>Recently Published</Typography>
        <Button style={viewAllCardsButtonStyle} variant="text">
          View All
        </Button>
      </TextButtonRow>
      <CardRowDiv>
        {DummyData.map((landmark, index) => {
          return (
            <LndMrkCard
              key={index}
              LandMark_Name={landmark.LandMark_Name}
              Category={landmark.Category}
              image={landmark.image}
            />
          );
        })}
      </CardRowDiv>
    </Background>
  );
};

export default UserProfile;
