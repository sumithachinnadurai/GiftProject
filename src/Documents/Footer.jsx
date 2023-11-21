import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
function Footer() {
  return (
    <div className="main-footer" id="main">
      <hr />
      <Typography sx={{ marginTop: "12px" }}>
        <div className="footer-content">
          <div className="footer-section">
            <h4>FAV SHOP</h4>
            <ul>
              <li>342-420-6969</li>
              <li>Coimbatore, Tamil Nadu</li>
              <li>123 Kuniyamuthur</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li>How to Shop?</li>
              <li>FAQ about Shopping</li>
              <li>Search More</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul>
              <li>How to Shop?</li>
              <li>FAQ about Shopping</li>
              <li>Search More</li>
            </ul>
          </div>
        </div>
        <div>
          <center>
            &copy;{new Date().getFullYear()} FAV SHOP | All rights reserved |
            Terms Of Service | Privacy
          </center>
        </div>
      </Typography>
    </div>
  );
}

export default Footer;
