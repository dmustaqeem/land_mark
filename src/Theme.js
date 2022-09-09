import { createTheme } from "@mui/material/styles";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@fontsource/prompt";
import "@fontsource/varela-round";
import "@fontsource/secular-one";
import "@fontsource/archivo-black";
import "@fontsource/catamaran";

const theme = createTheme({
  Submit_Button_blue: {
    backgroundColor: "#0099F1",
    color: "white",
    width: "45%",
    fontFamily: "Lato",
    fontSize: 17,
    fontWeight: 100,
    textTransform: "none",
    borderRadius: 3,
    letterSpacing: 0,
  },
  Submit_Button_gray: {
    backgroundColor: "#AEB0B6",
    color: "white",
    width: "45%",
    fontFamily: "Lato",
    fontSize: 17,
    fontWeight: 100,
    textTransform: "none",
    borderRadius: 3,
    letterSpacing: 0,
  },
  login_Button: {
    color: "white",
    backgroundColor: "#0099F1",
    width: "80%",
    fontFamily: "Lato",
    fontSize: 18,
    textTransform: "none",
    borderRadius: 2,
    marginTop: 20,
    letterSpacing: 0,
  },
  palette: {},
  typography: {
    long_card_name: {
      // fontFamily: "Lato",
      fontWeight: 800,
      fontSize: 18,
      color: "#0C143D",
    },
    long_card_category: {
      // fontFamily: "Lato",
      // fontWeight: 100,
      fontSize: 20,
      color: "white",
    },
    screen_heading: {
      fontFamily: "Archivo Black",
      fontSize: 35,
      fontWeight: 200,
      color: "#0C143D",
    },
    screen_sub_heading: {
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: 600,
      color: "#0C143D",
    },
    card_heading: {
      fontFamily: "Lato",
      fontSize: 15,
      fontWeight: 1000,
      color: "#0C143D",
    },
    card_category: {
      fontFamily: "Lato",
      fontSize: 14,
      fontWeight: 100,
      color: "#9DA7C0",
    },
    card_distance: {
      fontFamily: "Lato",
      fontSize: 13,
      fontWeight: 100,
      color: "#0099F1",
    },
    login_blue_heading: {
      fontFamily: "Lato",
      fontSize: 17,
      fontWeight: 900,
      color: "#0099F1",
      textAlign: "center",
      //   lineHeight: "43.2px",
    },
    login_gray_heading: {
      textAlign: "center",
      fontFamily: "Lato",
      fontSize: 10,
      fontWeight: 500,
      color: "#4B4D52",
      //   lineHeight: "43.2px",
    },
    clicktext_lower_blue: {
      fontFamily: "Lato",
      fontSize: 14,
      fontWeight: 600,
      color: "#005D9E",
    },
  },
});

export default theme;
