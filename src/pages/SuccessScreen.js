// import {
//   Background,
//   ColumnContainer,
//   CustomCard,
//   headingStylePrimary,
//   headingStyleSecondary,
//   LinkStyle,
//   Logo,
//   LogoHeader,
//   solidButtonStyle,
//   squareButtonIconStyle,
// } from "../components/StyledComponents";
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import Logo1 from "../assets/images/LndMark_logo.svg";
// import SquareButton from "../components/SquareButton";
// import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
// import LockResetIcon from "@mui/icons-material/LockReset";
// import { useParams, useNavigate } from "react-router-dom";

// import theme from "../Theme";
// import {
//   Alert,
//   Badge,
//   Button,
//   Link,
//   Snackbar,
//   Typography,
// } from "@mui/material";
// import { Auth } from "aws-amplify";
// import { useState } from "react";

// const SuccessScreen = ({ username }) => {
//   const [openSnackBar, setOpenSnackBar] = useState(false);
//   const [snackBarMessage, setSnackBarMessage] = useState("");
//   const [severity, setSeverity] = useState("info");
//   const navigate = useNavigate();
//   const { type } = useParams();
//   return (
//     <Background
//       style={{
//         gap: theme.spacing(7),
//       }}
//     >
//       <LogoHeader>
//         <div
//           style={{
//             height: "30px",
//             width: "30px",
//           }}
//         ></div>
//         <Logo src={Logo1} />
//         <SquareButton>
//           <QuestionMarkSharpIcon style={squareButtonIconStyle} />
//         </SquareButton>
//       </LogoHeader>
//       <ColumnContainer
//         style={{
//           gap: theme.spacing(3),
//         }}
//       >
//         <Typography style={headingStylePrimary}>
//           {type === "success" ? "Success" }
//         </Typography>
//         <Typography style={headingStyleSecondary}>
//           {type === "success"
//             ? "Click login to start using your account"}
//         </Typography>
//       </ColumnContainer>
//       <CustomCard
//         style={{
//           alignItems: "center",
//         }}
//       >
//         <Badge
//           style={{
//             width: "fit-content",
//           }}
//           overlap="circular"
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           badgeContent={
//             <CheckCircleIcon
//               style={{
//                 color: "#30CA6E",
//                 borderRadius: "100px",
//                 backgroundColor: "white",
//               }}
//             />
//           }
//         >
//           {type === "success" ? (
//             <AccountBoxIcon style={theme.achievement_icon_style} />
//           )

//         //   : (
//         //     <MailIcon style={theme.achievement_icon_style} />
//         //   )

//           }
//         </Badge>
//         <Typography
//           style={{
//             ...headingStylePrimary,
//             color: "#30CA6E",
//           }}
//         >
//           {type === "success"
//             ? "Almost there!"}
//         </Typography>
//         <Button
//           onClick={() => {
//             type === "success" ? navigate("/")

//             // : type==='confirmSignUp'?  navigate(`/${type}`);
//           }}
//           variant="contained"
//           style={solidButtonStyle}
//         >
//           {type === "success" ? "Login"

//         }
//         </Button>
//         {type !== "success" && (
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               textAlign: "center",
//               gap: theme.spacing(2),
//             }}
//           >
//             Didn't receieve code?
//             <Link
//               style={LinkStyle}
//               onClick={async () => {
//                 // console.log("Resend verification code clicked");
//                 if (username) {
//                   try {
//                     await Auth.resendSignUp(username);
//                     console.log("code resent successfully");
//                   } catch (err) {
//                     console.log("error resending code: ", err);
//                   }
//                 } else {
//                   setSnackBarMessage("Error. Enter username please.");
//                   setOpenSnackBar(true);
//                   setSeverity("error");
//                 }
//               }}
//               // underline="none"
//             >
//               {"Resend."}
//             </Link>
//           </div>
//         )}
//       </CustomCard>
//       <Snackbar
//         open={openSnackBar}
//         autoHideDuration={4000}
//         message={snackBarMessage}
//         onClose={() => setOpenSnackBar(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => setOpenSnackBar(false)}
//           severity={severity}
//           sx={{ width: "100%" }}
//         >
//           {snackBarMessage}
//         </Alert>
//       </Snackbar>
//     </Background>
//   );
// };
// export default SuccessScreen;
