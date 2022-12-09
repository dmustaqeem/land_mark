import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FM from "../assets/images/FM.jpg";
import styled from "styled-components";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import theme from "../Theme";

const TypoRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 150px;
  height: 100%;
  /* @media (max-height: 700px) {
    height: 90px;
  } */
  border-radius: 10px;
  /* margin: 10px; */
  justify-content: space-between;
  padding: ${theme.spacing(3)};
`;

const cardHeading = {
  fontFamily: "Lato",
  fontSize: 16,
  fontWeight: 900,
  color: "#000000",
};
const cardCategory = {
  fontFamily: "Lato",
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.text.secondary,
};
const cardDistance = {
  fontFamily: "Lato",
  fontSize: 14,
  fontWeight: 600,
  color: theme.palette.text.light_blue,
};

const MuiCardContent = styled(CardContent)`
  /* margin-bottom: 6px; */
  padding: 0;
`;

const LndMrkCard = ({ LandMark_Name, Category, Distance, image }) => {
  const [redHeart, setRedHeart] = useState("white");

  const handleHeartClick = () => {
    redHeart == "white" ? setRedHeart("red") : setRedHeart("white");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "160px",
        maxWidth: "160px",
        maxHeight: "210px",
        height: "100%",
        borderRadius: "14px",
        boxShadow: " 0px 2px 12px -1px rgba(0,0,0,0.20)",
        alignItems: "center",
        gap: theme.spacing(2),
      }}
    >
      <ImageDiv image={image}>
        <FavoriteIcon sx={{ color: redHeart }} onClick={handleHeartClick} />
        <ShareRoundedIcon
          sx={{ color: "white" }}
          onClick={() => {
            console.log("Share clicked");
          }}
        />
      </ImageDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          gap: theme.spacing(2),
        }}
      >
        <Typography style={cardHeading}>{LandMark_Name}</Typography>
        <TypoRowDiv>
          <Typography style={cardCategory}>{Category}</Typography>
          <Typography style={cardDistance}>{Distance}</Typography>
        </TypoRowDiv>
      </div>
    </div>
  );
};

export default LndMrkCard;
