import React, { Component } from "react";
import LndMrkCard from "../../components/LndMrkCard";
import Searchbar from "../../components/SearchBar";
import { Typography } from "@mui/material";
import { DummyData } from "../../DummyData";
import { useWindowDimensions } from "../../utils/WindowWidthHeight";
import Button from "@mui/material/Button";
import Joyride from "react-joyride";
import {
  Background,
  TextButtonRow,
  CardRowDiv,
  viewAllCardsButtonStyle,
  cardRowHeading,
  ColumnContainer,
} from "../../components/StyledComponents";
import Header from "../../components/Header";
import Tooltip from "../../components/OnboardingTourTooltip";
import { steps } from "../../utils/OnboardingTourSteps";

const WelcomeScreen = ({ username, setValue }) => {
  const { height, width } = useWindowDimensions();

  return (
    <Background style={{ height: height - 74, justifyContent: "space-evenly" }}>
      {!localStorage.getItem("oldUser") && (
        <Joyride
          continuous
          callback={(data) => {
            const { action, index, status, type } = data;

            if (action === "next" && index === 2 && type === "step:after") {
              setValue(5);
            }
            console.log("calback data argument : ", data);
          }}
          disableScrollParentFix={true}
          tooltipComponent={Tooltip}
          steps={steps}
        />
      )}
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
            return index === 0 ? (
              <LndMrkCard
                id="step1"
                name={landmark.LandMark_Name}
                category={landmark.Category}
                distance={landmark.Distance}
                image={landmark.image}
              />
            ) : (
              <LndMrkCard
                key={index}
                name={landmark.LandMark_Name}
                category={landmark.Category}
                distance={landmark.Distance}
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
          {DummyData.map((landmark, index) => {
            return index === 0 ? (
              <LndMrkCard
                id="step2"
                key={index}
                name={landmark.LandMark_Name}
                category={landmark.Category}
                distance={landmark.Distance}
                image={landmark.image}
              />
            ) : (
              <LndMrkCard
                key={index}
                name={landmark.LandMark_Name}
                category={landmark.Category}
                distance={landmark.Distance}
                image={landmark.image}
              />
            );
          })}
        </CardRowDiv>
      </ColumnContainer>
    </Background>
  );
};

export default WelcomeScreen;
