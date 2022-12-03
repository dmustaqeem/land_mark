import React, { Component, useState } from "react";
import styled from "styled-components";
import "@fontsource/poppins";
import "@fontsource/lato";
import "@fontsource/catamaran";
import theme from "../Theme";

const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.clicked ? "#0099f1" : "rgba(0, 136, 223, 0.1)"};
  border-radius: 8px;
  width: fit-content;
  height: 30px;
  padding-inline: ${theme.spacing(3)};
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${(props) => (props.clicked ? "white" : "#0099f1")};
  font-family: "Poppins";
  cursor: pointer;
`;
const CategoryButton = ({ categoryName }) => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <Container
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      clicked={clicked}
    >
      {categoryName}
    </Container>
  );
};

export default CategoryButton;
