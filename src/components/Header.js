import { Avatar, Typography } from "@mui/material";
import { useWindowDimensions } from "../utils/WindowWidthHeight";
import { headingStylePrimary } from "./StyledComponents";
import AvatarDummy from "../assets/images/AvatarDummy.png";
import Badge from "@mui/material/Badge";
import theme from "../Theme";

const Header = ({ username, home, screenName }) => {
  const { height } = useWindowDimensions();

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

      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        badgeContent={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: 18,
              width: 18,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "100%",
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
            }}
          >
            <Typography
              style={{
                fontWeight: "700",
                fontSize: "11px",
              }}
            >
              3
            </Typography>
          </div>
        }
      >
        <Avatar
          style={{
            height: 44,
            width: 44,
          }}
          src={AvatarDummy}
        />
      </Badge>
    </div>
  );
};

export default Header;
