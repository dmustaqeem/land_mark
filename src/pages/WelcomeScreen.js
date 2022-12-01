import React, { Component } from "react";
import LandMarkCard from "../components/LandMarkCard";
import Searchbar from "../components/SearchBar";
import styled from "styled-components";
import { Typography } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { DummyData } from "../DummyData";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import Button from "@mui/material/Button";
import {
  MainDiv,
  Heading_SearchDiv,
  SubHeadingCardDiv,
  TypographyRowDiv,
  CardRowDiv,
} from "../components/StyledComponents";

const WelcomeScreen = ({ username }) => {
  const { height, width } = useWindowDimensions();

  return (
    <MainDiv style={{ height: height - 100 }}>
      <Heading_SearchDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Typography sx={{ marginBottom: "20px" }} variant="screen_heading">
            Welcome,
          </Typography>
          <Typography
            style={{
              fontSize: 35,
            }}
          >
            {username}
          </Typography>
        </div>

        <Searchbar />
      </Heading_SearchDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">
            Discover Landmarks
          </Typography>

          <Button
            style={{
              textDecoration: "underline",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#0088DF",
              textTransform: "unset",
            }}
            variant="text"
          >
            View All
          </Button>
          {/* <Typography
            sx={{ color: "#0099F1", textDecoration: "underline" }}
            variant="screen_sub_heading"
          >
            Discover
          </Typography> */}
        </TypographyRowDiv>
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
      </SubHeadingCardDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">
            Activate Experiences
          </Typography>
          <Button
            style={{
              textDecoration: "underline",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#0088DF",
              textTransform: "unset",
            }}
            variant="text"
          >
            View All
          </Button>
        </TypographyRowDiv>
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
      </SubHeadingCardDiv>
    </MainDiv>
  );
};

export default WelcomeScreen;
