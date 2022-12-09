import { Avatar, Typography } from "@mui/material";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { headingStylePrimary } from "./StyledComponents";
import DummyDisplay from "../assets/images/DummyDisplay.png";

const Header = ({ username, home, screenName }) => {
  const { width, height } = useWindowDimensions();

  const headingFontSize = {
    fontSize: height < 700 ? 23 : 28,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "fit-content",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {home ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 5,
            }}
          >
            <Typography style={headingFontSize} variant="screen_heading">
              Welcome,
            </Typography>
            <Typography style={headingFontSize}>{username}</Typography>
          </div>
        </>
      ) : (
        <Typography
          style={{
            ...headingStylePrimary,
            color: "black",
            flex: 1,
            fontSize: "24px",
          }}
        >
          {screenName}
        </Typography>
      )}

      <Avatar alt="Remy Sharp" src={DummyDisplay} />
    </div>
  );
};

export default Header;
