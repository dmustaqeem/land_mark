import React, { Component } from "react";
import {
  MainDiv,
  TextButtonRow,
  CardRowDiv,
  viewAllCardsButtonStyle,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import Searchbar from "../components/SearchBar";
import { Button, Typography } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";
import styled from "styled-components";
import CategoryButton from "../components/CategoryButton";
import { DummyCategory, DummyData } from "../DummyData";
import LandMarkCard from "../components/LandMarkCard";
import theme from "../Theme";
import Header from "../components/Header";
import { Carousel } from "../components/Carousel";

const CategoryRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 100%;
  height: fit-content;
  align-items: center;
  gap: ${theme.spacing(3)};
`;

const ActivateScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <MainDiv
      style={{
        height: height - 100,
      }}
    >
      <Header screenName={"Activate"} />
      <Searchbar />

      <Carousel dots>
        {DummyData.map((exp, index) => {
          return (
            <ExperienceCard
              key={index}
              experienceName={exp.LandMark_Name}
              experienceCategory={exp.Category}
              experienceImage={exp.image}
            />
          );
        })}
      </Carousel>

      <CategoryRowDiv>
        {DummyCategory.map((category, index) => {
          return (
            <CategoryButton key={index} categoryName={category.Category_name} />
          );
        })}
      </CategoryRowDiv>
      <TextButtonRow>
        <Typography variant="screen_sub_heading">Newest Experiences</Typography>
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
    </MainDiv>
  );
};

export default ActivateScreen;
