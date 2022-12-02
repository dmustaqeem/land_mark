import React, { Component } from "react";
import LandMarkCard from "../components/LandMarkCard";
import Searchbar from "../components/SearchBar";
import { Typography } from "@mui/material";
import { DummyData } from "../DummyData";
import { useWindowDimensions } from "../utils/WindowWidthHeight";

import Button from "@mui/material/Button";
import {
  MainDiv,
  TextButtonRow,
  CardRowDiv,
  viewAllCardsButtonStyle,
} from "../components/StyledComponents";
import Header from "../components/Header";

const WelcomeScreen = ({ username }) => {
  const { height, width } = useWindowDimensions();

  return (
    <MainDiv style={{ height: height - 100 }}>
      <Header home username={username} />
      <Searchbar />
      <TextButtonRow>
        <Typography variant="screen_sub_heading">Discover Landmarks</Typography>
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
              Distance={landmark.Distance}
              image={landmark.image}
            />
          );
        })}
      </CardRowDiv>
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

export default WelcomeScreen;
