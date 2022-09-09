import {
  MainDiv,
  Heading_SearchDiv,
  SubHeadingCardDiv,
  TypographyRowDiv,
  CardRowDiv,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import Searchbar from "../components/SearchBar";
import { Typography } from "@mui/material";
import LongExpDiv from "../components/LongExpDiv";
import styled from "styled-components";
import CategoryButton from "../components/CategoryButton";
import { DummyCategory, DummyData } from "../DummyData";
import LandMarkCard from "../components/LandMarkCard";

const CategoryRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 90%;
  min-height: 50px;
  align-self: center;
`;

const ExperienceScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <MainDiv>
      <Heading_SearchDiv>
        <Typography sx={{ marginBottom: "20px" }} variant="screen_heading">
          Experience
        </Typography>
        <Searchbar />
      </Heading_SearchDiv>
      <LongExpDiv />
      <CategoryRowDiv>
        {DummyCategory.map((category, index) => {
          return <CategoryButton name={category.Category_name} />;
        })}
      </CategoryRowDiv>
      <SubHeadingCardDiv>
        <TypographyRowDiv>
          <Typography variant="screen_sub_heading">
            Newest Experiences
          </Typography>
        </TypographyRowDiv>
        <CardRowDiv>
          {DummyData.map((landmark, index) => {
            return (
              <LandMarkCard
                key={index}
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
          <Typography variant="screen_sub_heading">
            Popular Experiences
          </Typography>
        </TypographyRowDiv>
        <CardRowDiv>
          {DummyData.map((landmark, index) => {
            return (
              <LandMarkCard
                key={index}
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

export default ExperienceScreen;
