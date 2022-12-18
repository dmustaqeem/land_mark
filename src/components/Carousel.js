// import "./carousel.css";

import styled from "@emotion/styled";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import Slider, { Settings } from "react-slick";
import theme from "../Theme";
import sliderNormalDots from "../utils/SlickSliderDots";
import { settings } from "../utils/SlickSliderSettings";
export const Carousel = (props) => {
  return (
    <sliderNormalDots>
      <Slider {...settings} {...props}>
        {props.children}
      </Slider>
    </sliderNormalDots>
  );
};
