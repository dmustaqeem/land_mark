import { PropaneSharp } from "@mui/icons-material";
import styled from "styled-components";
import theme from "../Theme";

const HelpButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 43.5px;
  width: 43.5px;
  border-radius: 12px;
  border: 1px solid #dcecf6;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SquareButton = (props) => {
  return <HelpButton onClick={props.onClick}>{props.children}</HelpButton>;
};

export default SquareButton;
