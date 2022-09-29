import React, { Component }  from 'react';
import styled from "styled-components";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FM from "../assets/images/FM.jpg";
import { useState } from "react";
import { Typography } from "@mui/material";

const ImageDiv = styled.div`
  display: flex;
  background-image: url(${FM});
  background-size: contain;
  /* background-repeat: no-repeat; */
  /* @media (max-height: 700px) {
    height: 90px;
  } */
  border-radius: 10px;
  width: 90%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  flex-direction: column;
  min-height: 200px;
`;
const IconsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TextColDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60%;
  text-align: right;
  justify-content: flex-end;
`;

const LongExpDiv = () => {
  const [redHeart, setRedHeart] = useState("white");

  const handleHeartClick = () => {
    console.log("Heart clicked");
    redHeart == "white" ? setRedHeart("red") : setRedHeart("white");
  };
  return (
    <ImageDiv>
      <IconsRowDiv>
        <FavoriteIcon sx={{ color: redHeart }} onClick={handleHeartClick} />
        <ShareRoundedIcon
          sx={{ color: "white" }}
          onClick={() => {
            console.log("Share clicked");
          }}
        />
      </IconsRowDiv>
      <TextColDiv>
        <Typography variant="long_card_name">Experience Name</Typography>
        <Typography variant="long_card_category">
          Experience Category
        </Typography>
      </TextColDiv>
    </ImageDiv>
  );
};

export default LongExpDiv;
