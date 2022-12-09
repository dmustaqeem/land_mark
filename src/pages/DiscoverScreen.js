import React, { Component } from "react";
import {
  Background,
  CardRowDiv,
  cardRowHeading,
  ColumnContainer,
  TextButtonRow,
  viewAllCardsButtonStyle,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { Typography, Button } from "@mui/material";
import Searchbar from "../components/SearchBar";
import LndMrkCard from "../components/LndMrkCard";
import { DummyData } from "../DummyData";
// import { API, graphqlOperation, Storage } from "aws-amplify";
// import * as mutations from "../graphql/mutations";
// import * as queries from "../graphql/queries";
import Header from "../components/Header";

const DiscoverScreen = () => {
  const { height } = useWindowDimensions();
  // const [fileData, setFileData] = useState("null");

  // const handleOnChange = async (e) => {
  //   // console.log("image::", e.target.files[0]);
  //   setFileData(e.target.files[0]);
  //   // console.log(URL.createObjectURL(e.target.files[0]));

  //   try {
  //     const result = await Storage.put(fileData.name, fileData, {
  //       level: "protected",
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log("Error uploading file: ", error);
  //   }
  //   // setSelectedImage(e.target.files[0]);
  //   // setImageUrl(URL.createObjectURL(e.target.files[0]));
  //   // onImageUrlChange(URL.createObjectURL(selectedImage));
  // };

  return (
    <Background style={{ height: height - 74 }}>
      <Header screenName={"Discover"} />

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
    </Background>
  );
};

export default DiscoverScreen;
