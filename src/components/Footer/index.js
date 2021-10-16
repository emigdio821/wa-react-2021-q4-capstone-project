import React from "react";
import { BiCoffee } from "react-icons/bi";
import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-item">
        <a
          href="https://github.com/emigdio821"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <span className="github-link">
            @emigdio821 <BiCoffee />
          </span>
        </a>
      </div>
      <div className="footer-item">
        Ecommerce created during{" "}
        <a
          href="https://www.wizeline.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-link wizeline"
        >
          <span>WIZE</span>
          <span style={{ color: "#ff4d4f" }}>LINE</span>
        </a>
        ’s{" "}
        <a
          href="https://academy.wizeline.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Academy
        </a>{" "}
        React<span style={{ fontWeight: "bold" }}>Bootcamp</span>
      </div>
    </div>
  </footer>
);

export default Footer;
