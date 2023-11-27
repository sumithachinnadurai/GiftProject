// import React from "react";

// const Contact = () => {
//   const containerStyle = {
//     backgroundImage:
//       "url('https://img.freepik.com/free-photo/empty-blackboard-surrounded-by-shopping-bags_23-2148288236.jpg?w=900&t=st=1700502157~exp=1700502757~hmac=4830d0de770d44a9223171bbc509adc5cac019b0ab7bd77f1beeb8d15d16c7a8 ')", // replace with the actual path to your image
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white",
//     padding: "20px",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1>CONTACT</h1>
//       <h4>
//         CONTACT: 9123456780
//         <br />
//         E-MAIL: favshop@gmail.com
//         <br />
//         INSTAGRAM: https://www.instagram.com/
//         <br />
//         FACEBOOK: https://www.facebook.com/
//       </h4>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/black-gradient-background_53876-93480.jpg?w=996&t=st=1701005908~exp=1701006508~hmac=a452c66fdfb89834de452f02db1566f64cfc25f77cd1d9555da8d0710a36a21e")', // Replace with the actual path to your image

        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "white" }}>
        <b>Contact my Gift Shop</b>
      </Typography>
      <b>
        <p sx={{ color: "white" }}>
          Customer Reviews: Showcase positive experiences to build trust.
        </p>
        <p>
          Gift Packages: Provide curated bundles for convenient gifting options.
        </p>
        <p>
          Social Media Integration: Utilize platforms to promote customized
          gifts and engage with customers.
        </p>
      </b>

      <Box sx={{ m: 3, width: "600px" }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  18000-00-0000 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  help@mygiftshop.com (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  123456790 (toll-free)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Contact;
