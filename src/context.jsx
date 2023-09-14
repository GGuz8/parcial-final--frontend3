import React, { createContext, useContext, useState, useEffect } from 'react';
const GlobalContext = createContext()


export const themes = {
    light: {
        font: "black",
        background: "white"
    },
    dark: {
        font: "white",
        background: "black"
    }
}



export function GlobalContextProvider({ children }) {
    
    // TEMAS
    const [theme, setTheme] = useState(themes.light)
    
    const handleChangeTheme = () => {
      theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
    }

    // API

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      async function fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          console.error('Error al cargar datos desde la API:', error);
          setLoading(false);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <GlobalContext.Provider value={{ data, loading, theme, handleChangeTheme }}>
        {children}
      </GlobalContext.Provider>
    );
  }
  
  export function useGlobalContext() {
    return useContext(GlobalContext);
  }


