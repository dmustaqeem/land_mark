import React, { Component } from "react";
import LndMrkCard from "../../components/LndMrkCard";
import SpatialTrackingCard from "../../components/SpatialTrackingCard";
import Searchbar from "../../components/SearchBar";
import { Typography } from "@mui/material";
import { DummyData, SpatialData } from "../../DummyData";
import { useWindowDimensions } from "../../utils/WindowWidthHeight";
import Button from "@mui/material/Button";
import {
  Background,
  TextButtonRow,
  CardRowDiv,
  viewAllCardsButtonStyle,
  cardRowHeading,
  ColumnContainer,
} from "../../components/StyledComponents";
import Header from "../../components/Header";

const WelcomeScreen = ({ username, setValue }) => {
  const { height, width } = useWindowDimensions();

  return (
    <Background style={{ height: height - 74, justifyContent: "space-evenly" }}>
      <Header setValue={setValue} home username={username} />
      <Searchbar />
      <ColumnContainer
        style={{
          width: "100%",
        }}
      >
        <TextButtonRow>
          <Typography style={cardRowHeading}>Discover Landmarks</Typography>
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
                Distance={landmark.Distance}
                image={landmark.image}
              />
            );
          })}
        </CardRowDiv>
      </ColumnContainer>
      <ColumnContainer
        style={{
          width: "100%",
        }}
      >
        <TextButtonRow>
          <Typography style={cardRowHeading}>Activate Experiences</Typography>
          <Button style={viewAllCardsButtonStyle} variant="text">
            View All
          </Button>
        </TextButtonRow>
        <CardRowDiv>
          {SpatialData.map((landmark, index) => {
            return (
              <SpatialTrackingCard
                key={index}
                LandMark_Name={landmark.LandMark_Name}
                Category={landmark.Category}
                image={landmark.image}
                lndmrklink={landmark.link}
              />
            );
          })}
        </CardRowDiv>
      </ColumnContainer>
    </Background>
  );
};

export default WelcomeScreen;
