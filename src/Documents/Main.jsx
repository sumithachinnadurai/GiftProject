// import React from "react";

// const Main = () => {
//   return (
//     <div>
//       <b>
//         <h1 style={{ color: "purple" }}>
//           <center>"FAV SHOP"</center>
//         </h1>
//       </b>
//       <br></br>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//     </div>
//   );
// };

// export default Main;
import React from "react";

const Main = () => {
  const mainStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/present-notebook-near-macaroons_23-2147931569.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white", // Text color on top of the background image
    textAlign: "center",
  };

  return (
    <div style={mainStyle}>
      <b>
        <h1 style={{ color: "purple" }}>
          <center>"FAV SHOP"</center>
        </h1>
      </b>
      <br />
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      {/* Repeat the above h3 block for other text if needed */}
    </div>
  );
};

export default Main;
