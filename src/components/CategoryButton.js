import React, { Component }  from 'react';
import styled from "styled-components";
import "@fontsource/poppins";
import "@fontsource/lato";
import "@fontsource/catamaran";

const Container = styled.div`
  display: flex;
  background-color: #0099f1;
  border-radius: 8px;
  width: fit-content;
  height: 20px;
  padding: 17px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
  font-family: "Poppins";
  margin-right: 5px;
`;
const CategoryButton = ({ name }) => {
  return <Container>{name}</Container>;
};

export default CategoryButton;
