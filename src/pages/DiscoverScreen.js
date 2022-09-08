import {
  MainDiv,
  Heading_SearchDiv,
  SubHeadingCardDiv,
  TypographyRowDiv,
} from "../components/StyledComponents";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { Typography } from "@mui/material";
import Searchbar from "../components/SearchBar";
import LandMarkCard from "../components/LandMarkCard";
import DummyData from "../DummyData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "../components/SlickSliderDots";
import { settings } from "../utils/SlickSliderSettings";

const DiscoverScreen = () => {
  const { height, width } = useWindowDimensions();

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
              />
            );
          })}
        </Slider>
      </SliderWrapper>
    </MainDiv>
  );
};

export default DiscoverScreen;
