import React, { Component, useState } from "react";
import {
  MainDiv,
  TextButtonRow,
  viewAllCardsButtonStyle,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { Typography, Button } from "@mui/material";
import Searchbar from "../components/SearchBar";
import LandMarkCard from "../components/LandMarkCard";
import { DummyData } from "../DummyData";
import { API, graphqlOperation, Storage } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import Header from "../components/Header";
import { Carousel } from "../components/Carousel";

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
      <Header screenName={"Discover"} />

      <Searchbar />
      <TextButtonRow>
        <Typography variant="screen_sub_heading">Nearby Landmarks</Typography>
        <Button style={viewAllCardsButtonStyle} variant="text">
          View All
        </Button>
      </TextButtonRow>
      <Carousel>
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
      </Carousel>
      {/* <Button
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
      </Button> */}
    </MainDiv>
  );
};

export default DiscoverScreen;
