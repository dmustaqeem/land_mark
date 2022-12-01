import React, { Component, useState } from "react";
import {
  MainDiv,
  Heading_SearchDiv,
  SubHeadingCardDiv,
  TypographyRowDiv,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { Typography, Button } from "@mui/material";
import Searchbar from "../components/SearchBar";
import LandMarkCard from "../components/LandMarkCard";
import { DummyData } from "../DummyData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "../components/SlickSliderDots";
import { settings } from "../utils/SlickSliderSettings";
import { API, graphqlOperation, Storage } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const DiscoverScreen = () => {
  const { height, width } = useWindowDimensions();
  const [fileData, setFileData] = useState("null");

  const handleOnChange = async (e) => {
    console.log("image::", e.target.files[0]);
    setFileData(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));

    try {
      const result = await Storage.put(fileData.name, fileData, {
        level: "protected",
      });
      console.log(result);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    // setSelectedImage(e.target.files[0]);
    // setImageUrl(URL.createObjectURL(e.target.files[0]));
    // onImageUrlChange(URL.createObjectURL(selectedImage));
  };

  return (
    <MainDiv style={{ height: height - 100 }}>
      <Heading_SearchDiv>
        <Typography sx={{ marginBottom: "20px" }} variant="screen_heading">
          Discover
        </Typography>
        <Searchbar />
      </Heading_SearchDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">Nearby Landmarks</Typography>
        </TypographyRowDiv>
      </SubHeadingCardDiv>
      <SliderWrapper>
        <Slider {...settings}>
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
        </Slider>
      </SliderWrapper>
      <Button
        onClick={async () => {
          try {
            const newEntry = await API.graphql({
              query: mutations.createSpacialWorldTracking,
              variables: {
                input: {
                  x_coordinate: 1.14,
                  y_coordinate: 2.14,
                  z_coordinate: 3.14,
                  model_s3_link: "blaaa ballaa",
                },
              },
              authMode: "AMAZON_COGNITO_USER_POOLS",
            });

            console.log("entry created");
          } catch (er) {
            console.log("create entry error: ", er);
          }
        }}
      >
        create entry
      </Button>
      <Button
        onClick={async () => {
          try {
            const listEntries = await API.graphql({
              query: queries.listSpacialWorldTrackings,
              authMode: "AMAZON_COGNITO_USER_POOLS",
            });
            console.log("entry listed");
            console.log("list entries :", listEntries);
          } catch (er) {
            console.log("list entry error: ", er);
          }
        }}
      >
        list entries
      </Button>
      <Button variant="contained" component="label">
        Upload
        <input
          onChange={handleOnChange}
          hidden
          accept=".obj,.fbx,.gltf,.glb"
          multiple
          type="file"
        />
      </Button>
    </MainDiv>
  );
};

export default DiscoverScreen;
