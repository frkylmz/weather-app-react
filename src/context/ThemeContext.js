import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // locastorage'da birşey yoksa default olarak light versin.
  const [city, setCity] = useState(localStorage.getItem("city") || "İzmir"); // Şehir ismi İzmir

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  // localstorage'a kaydetmek için

  useEffect(() => {
    localStorage.setItem("İzmir", city);
  }, [city]);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
