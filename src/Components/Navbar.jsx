import React from 'react'
import {useGlobalContext} from '../context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useGlobalContext()
  
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/detail">Detail</Link> */}
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contact</Link>

      <button onClick={handleChangeTheme}
      style={{background: theme.background, color: theme.font}}
      >Change theme</button>
    </nav>
  )
}

export default Navbar