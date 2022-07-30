import { useTheme } from "../context/ThemeContext";

const Card = ({ date, mintemp, maxtemp, condition, icon }) => {
  const { theme } = useTheme();
  const mainColor = theme === "light" ? "black" : "white";
  const mainBorder = theme === "light" ? "black" : "white";

  return (
    <div
      className="card text-center fw-bold p-3 bg-transparent border-3 rounded-3 ms-3 rounded-3 mt-3 d-flex cardCss"
      style={{
        width: "19rem",
        borderColor: mainBorder,
      }}
    >
      <div className="card-body">
        <h5 className="card-title fw-bold ">{date}</h5>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src={icon}
          style={{ height: "90px", width: "90px", marginTop: "-20px" }}
          alt="weather"
        />
      </div>
      <span className="mt-3">{condition}</span>
      <span className="mt-3">
        <span style={{ color: "orange" }}>{maxtemp}°C</span> /{" "}
        <span style={{ color: mainColor }}>{mintemp}°C</span>
      </span>
    </div>
  );
};

export default Card;
