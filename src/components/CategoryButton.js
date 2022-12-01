import React, { Component, useState } from "react";
import styled from "styled-components";
import "@fontsource/poppins";
import "@fontsource/lato";
import "@fontsource/catamaran";

const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.clicked ? "#0099f1" : "rgba(0, 136, 223, 0.1)"};
  border-radius: 8px;
  width: fit-content;
  height: 20px;
  padding: 17px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${(props) => (props.clicked ? "white" : "#0099f1")};

  font-family: "Poppins";
  margin-right: 5px;
  cursor: pointer;
`;
const CategoryButton = ({ name }) => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <Container
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      clicked={clicked}
    >
      {name}
    </Container>
  );
};

export default CategoryButton;
