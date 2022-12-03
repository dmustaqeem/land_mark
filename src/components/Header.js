import { Avatar, Typography } from "@mui/material";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { headingStylePrimary } from "./StyledComponents";

const Header = ({ username, home, screenName }) => {
  const { width } = useWindowDimensions();
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
            <Typography
              // style={{
              //   fontSize: width < 500 ? 25 : 35,
              // }}
              variant="screen_heading"
            >
              Welcome,
            </Typography>
            <Typography
              style={{
                fontSize: 35,
              }}
            >
              {username}
            </Typography>
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

      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  );
};

export default Header;
