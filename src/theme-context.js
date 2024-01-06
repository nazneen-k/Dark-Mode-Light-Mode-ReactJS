// import {Children, createContext, useContext, useEffect, useState} from "react";

// const ThemeContext= createContext();

// export const useTheme=()=>{
//     return useContext(ThemeContext)
// }

// export const ThemeProvider=({Children})=>{
//     const [isDarkMode,setIsDarkMode]=useState(false);
//     const toggleTheme=()=>{
//         setIsDarkMode((prevState)=>!prevState)
//     };



//     const theme = isDarkMode ? "dark" : "light";

//     useEffect(()=>{
//         document.documentElement.setAttribute("data-theme",theme)
//     },[isDarkMode])

//     return(
//         <ThemeContext.Provider value={{theme,toggleTheme}}  >{Children}</ThemeContext.Provider>
//     )
// }



import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};