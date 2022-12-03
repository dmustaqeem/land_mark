import { Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../Theme";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const ContentContainer = styled.div`
  flex-direction: row;
  border-radius: 14px;
  box-shadow: 0px 6px 30px rgba(30, 61, 83, 0.08);
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing(3)};
  padding-right: ${theme.spacing(3)};
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;
`;
const RightIcon = styled(ChevronRightRoundedIcon)`
  color: #9da7c0;
  font-weight: 900;
  border: 2px solid #9da7c0;
  border-radius: 100px;
`;
const IconTextContainer = styled.div`
  flex-direction: row;
  gap: ${theme.spacing(3)};
  display: flex;
  align-items: center;
`;
const OptionsCard = ({ icon, label, onClick }) => {
  return (
    <ContentContainer onClick={onClick}>
      <IconTextContainer>
        {icon}
        <Typography variant="more_option_text">{label}</Typography>
      </IconTextContainer>
      <RightIcon
        style={{
          fontSize: "22px",
        }}
      />
    </ContentContainer>
  );
};

export default OptionsCard;
