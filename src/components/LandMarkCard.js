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

const TypoRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-self: center;
  justify-content: space-between;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px;
  @media (max-height: 700px) {
    height: 90px;
  }
  min-height: 50px;
  border-radius: 10px;
  /* margin: 10px; */
  justify-content: space-between;
  padding: 6px;
`;

const MuiCardContent = styled(CardContent)`
  padding-top: 0;
  padding-bottom: 0;
  /* margin-bottom: 6px; */
`;

const LandMarkCard = ({ LandMark_Name, Category, Distance, image }) => {
  const [redHeart, setRedHeart] = useState("white");

  const handleHeartClick = () => {
    console.log("Heart clicked");
    redHeart == "white" ? setRedHeart("red") : setRedHeart("white");
  };
  return (
    <Card
      sx={{
        minWidth: "160px",
        maxWidth: "160px",
        height: "fit-content",
        borderRadius: "12px",
        "&:hover": {
          border: "3px solid #0099F1",
        },
        boxShadow: " 0px 2px 12px -1px rgba(0,0,0,0.20)",
      }}
    >
      <CardActionArea>
        <ImageDiv image={image}>
          <FavoriteIcon sx={{ color: redHeart }} onClick={handleHeartClick} />
          <ShareRoundedIcon
            sx={{ color: "white" }}
            onClick={() => {
              console.log("Share clicked");
            }}
          />
        </ImageDiv>
        <MuiCardContent sx={{ paddingY: "0", marginBottom: "6px" }}>
          <Typography gutterBottom variant="card_heading" component="div">
            {LandMark_Name}
          </Typography>
          <TypoRowDiv>
            <Typography variant="card_category">{Category}</Typography>
            <Typography variant="card_distance">{Distance}</Typography>
          </TypoRowDiv>
        </MuiCardContent>
      </CardActionArea>
    </Card>
  );
};

export default LandMarkCard;
