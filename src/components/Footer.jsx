import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  const mainColor = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190,190,190)";

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/frkylmz/"
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            color: mainColor,
          }}
          target="blank"
        >
          Faruk Yılmaz
        </a>
        <br />
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-10px",
          color: mainColor,
        }}
      >
        <a href="https://github.com/frkylmz" target="blank">
          <BsGithub
            size={"33"}
            style={{ textDecoration: "none", color: mainColor }}
          />
        </a>
        <a
          className="ms-2"
          href="https://www.linkedin.com/in/frkylmz/"
          target="blank"
        >
          <AiFillLinkedin size={"40"} style={{ color: mainColor }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
