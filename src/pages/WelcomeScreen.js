import LandMarkCard from "../components/LandMarkCard";
import Searchbar from "../components/SearchBar";
import styled from "styled-components";
import { Typography } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import DummyData from "../DummyData";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import {
  MainDiv,
  Heading_SearchDiv,
  SubHeadingCardDiv,
  TypographyRowDiv,
  CardRowDiv,
} from "../components/StyledComponents";

const TextIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
`;

const ArrowIcon = styled(ArrowForwardSharpIcon)`
  color: #0099f1;
  font-weight: 900;
  stroke: #0099f1;
  stroke-width: 1px;
`;
// const CardRowDiv = styled.div`
//   display: flex;
//   overflow-x: scroll;
//   flex-direction: row;
//   height: fit-content;
//   padding-top: 5px;
//   padding-bottom: 10px;
//   gap: 12px;
// `;

const WelcomeScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <MainDiv style={{ height: height - 100 }}>
      <Heading_SearchDiv>
        <Typography sx={{ marginBottom: "20px" }} variant="screen_heading">
          Welcome
        </Typography>
        <Searchbar />
      </Heading_SearchDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">Nearby Landmarks</Typography>
          <TextIconDiv>
            <Typography sx={{ color: "#0099F1" }} variant="screen_sub_heading">
              Discover
            </Typography>
            <ArrowIcon fontSize="small" />
          </TextIconDiv>
        </TypographyRowDiv>
        <CardRowDiv>
          {DummyData.map((landmark) => {
            return (
              <LandMarkCard
                LandMark_Name={landmark.LandMark_Name}
                Category={landmark.Category}
                Distance={landmark.Distance}
              />
            );
          })}
        </CardRowDiv>
      </SubHeadingCardDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">Nearby Landmarks</Typography>
          <TextIconDiv>
            <Typography sx={{ color: "#0099F1" }} variant="screen_sub_heading">
              Discover
            </Typography>
            <ArrowIcon fontSize="small" />
          </TextIconDiv>
        </TypographyRowDiv>
        <CardRowDiv>
          {DummyData.map((landmark) => {
            return (
              <LandMarkCard
                LandMark_Name={landmark.LandMark_Name}
                Category={landmark.Category}
                Distance={landmark.Distance}
              />
            );
          })}
        </CardRowDiv>
      </SubHeadingCardDiv>
    </MainDiv>
  );
};

export default WelcomeScreen;
