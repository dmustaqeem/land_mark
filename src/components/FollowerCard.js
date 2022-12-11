import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../Theme";
import { solidButtonStyle } from "./StyledComponents";
import Avatar from "@mui/material/Avatar";

const ContentContainer = styled.div`
  flex-direction: row;
  border-radius: 14px;
  box-shadow: 0px 6px 30px rgba(30, 61, 83, 0.08);
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing(3)};
  padding-right: ${theme.spacing(4)};
  width: 100%;
  height: 70px;
  display: flex;
`;

const AvatarNameContainer = styled.div`
  flex-direction: row;
  gap: ${theme.spacing(4)};
  display: flex;
  align-items: center;
`;
const FollowerCard = ({ follower }) => {
  return (
    <ContentContainer>
      <AvatarNameContainer>
        <Avatar src={follower.avatar} />
        <Typography variant="more_option_text">{follower.name}</Typography>
      </AvatarNameContainer>
      <Button
        variant="contained"
        style={{
          ...solidButtonStyle,
          maxWidth: "98px",
          width: "100%",
          height: "38px",
          fontSize: "15px",
        }}
      >
        Remove
      </Button>
    </ContentContainer>
  );
};

export default FollowerCard;
