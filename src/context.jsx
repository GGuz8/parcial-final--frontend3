import React, { createContext, useContext, useReducer, useEffect } from 'react';

const GlobalContext = createContext();

export const themes = {
  light: {
    font: "black",
    background: "white"
  },
  dark: {
    font: "white",
    background: "black"
  }
};


const SET_THEME = 'SET_THEME';
const SET_DATA = 'SET_DATA';
const SET_LOADING = 'SET_LOADING';


function globalReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const initialState = {
  theme: themes.light,
  data: [],
  loading: true
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);


  const handleChangeTheme = () => {
    const newTheme = state.theme === themes.dark ? themes.light : themes.dark;
    dispatch({ type: SET_THEME, payload: newTheme });
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        dispatch({ type: SET_DATA, payload: jsonData });
        dispatch({ type: SET_LOADING, payload: false });
      } catch (error) {
        console.error('Error al cargar datos desde la API:', error);
        dispatch({ type: SET_LOADING, payload: false });
      }
    }

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, handleChangeTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}