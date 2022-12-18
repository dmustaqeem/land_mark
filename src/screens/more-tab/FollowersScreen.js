import SquareButton from "../../components/SquareButton";
import {
  Background,
  groupElements,
  headingStylePrimary,
  SemiHeader,
} from "../../components/StyledComponents";
import { useWindowDimensions } from "../../utils/WindowWidthHeight";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svgs/arrow-left.svg";
import { Typography } from "@mui/material";
import theme from "../../Theme";
import Searchbar from "../../components/SearchBar";
import FollowerCard from "../../components/FollowerCard";
import { DummyFollowers } from "../../DummyData";

const FollowersScreen = ({ setValue }) => {
  const { height } = useWindowDimensions();
  return (
    <Background
      style={{
        height: height - 74,

        gap: theme.spacing(4),
      }}
    >
      <SemiHeader>
        <SquareButton
          onClick={() => {
            setValue(5);
          }}
        >
          <ArrowLeftIcon />
        </SquareButton>
        <Typography
          style={{
            ...headingStylePrimary,
            color: theme.palette.text.primary,
            flex: 1,
          }}
        >
          Followers
        </Typography>
      </SemiHeader>
      <Searchbar />
      <div
        style={{
          ...groupElements,
          gap: theme.spacing(4),
          maxWidth: "349px",
          width: "100%",
        }}
      >
        {DummyFollowers.map((follower, index) => (
          <FollowerCard key={index} follower={follower} />
        ))}
      </div>
    </Background>
  );
};

export default FollowersScreen;
