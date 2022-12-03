import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import SquareButton from "../components/SquareButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import StarsIcon from "@mui/icons-material/Stars";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  CustomCard,
  MainDiv,
  headingStylePrimary,
  headingStyleSecondary,
  squareButtonIconStyle,
  TextButtonRow,
  viewAllCardsButtonStyle,
  CardRowDiv,
  solidButtonStyle,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import theme from "../Theme";
import { DummyData } from "../DummyData";
import LandMarkCard from "../components/LandMarkCard";

const SocialInfoContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
`;
const UserProfile = ({ setValue }) => {
  const { width, height } = useWindowDimensions();
  return (
    <MainDiv
      style={{
        gap: theme.spacing(4),
        alignItems: "center",
        height: height - 100,
        padding: theme.spacing(3),
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "fit-content",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SquareButton
          onClick={() => {
            setValue(4);
          }}
        >
          <KeyboardBackspaceIcon />
        </SquareButton>
        <Typography
          style={{ ...headingStylePrimary, color: theme.palette.text.primary }}
        >
          Profile
        </Typography>
        <SquareButton>
          <ShareIcon style={squareButtonIconStyle} />
        </SquareButton>
      </div>

      <CustomCard
        style={{
          alignItems: "center",
          gap: theme.spacing(4),
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            badgeContent={
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
                }}
              >
                <MilitaryTechIcon />
                <Typography>510</Typography>
              </div>
            }
          >
            <Avatar
              style={{
                border: "2px solid #D9D9D9",
                height: "106px",
                width: "106px",
              }}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
          </Badge>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              style={{
                ...headingStylePrimary,
                color: "black",
              }}
            >
              Jane Wu
            </Typography>
            <Typography style={headingStyleSecondary}>
              Personal Creator
            </Typography>
            <Button variant="contained" style={solidButtonStyle}>
              Follow
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "68px",
            borderTop: `1px solid #DCECF6`,
            borderBottom: `1px solid #DCECF6`,
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
            <Typography style={headingStylePrimary}>22.2K</Typography>
          </SocialInfoContainer>
          <SocialInfoContainer
            style={{
              flex: 3,
              borderLeft: "1px solid #DCECF6",
              borderRight: "1px solid #DCECF6",
            }}
          >
            <Typography style={headingStyleSecondary}>Followers</Typography>
            <Typography style={headingStylePrimary}>3.6K</Typography>
          </SocialInfoContainer>
          <SocialInfoContainer
            style={{
              flex: 2,
            }}
          >
            <Typography style={headingStyleSecondary}>Published</Typography>
            <Typography style={headingStylePrimary}>102</Typography>
          </SocialInfoContainer>
        </div>
        <Typography
          style={{
            ...headingStylePrimary,
            alignSelf: "flex-start",
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
          <StarsIcon style={theme.achievement_icon_style} />
          <EmojiEventsIcon style={theme.achievement_icon_style} />
          <VerifiedUserIcon style={theme.achievement_icon_style} />
          <WorkspacePremiumIcon style={theme.achievement_icon_style} />
        </div>
      </CustomCard>
      <TextButtonRow>
        <Typography variant="screen_sub_heading">
          Activate Experiences
        </Typography>
        <Button style={viewAllCardsButtonStyle} variant="text">
          View All
        </Button>
      </TextButtonRow>
      <CardRowDiv>
        {DummyData.map((landmark, index) => {
          return (
            <LandMarkCard
              key={index}
              LandMark_Name={landmark.LandMark_Name}
              Category={landmark.Category}
              image={landmark.image}
            />
          );
        })}
      </CardRowDiv>
    </MainDiv>
  );
};

export default UserProfile;
