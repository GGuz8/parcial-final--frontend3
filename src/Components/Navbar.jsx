import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { navBarTheme, handleChangeTheme } = useGlobalContext()

  return (
    <div className='navBar-container'>
      <nav className="navBar" style={{ background: navBarTheme.background, color: navBarTheme.font }} >
        <img src="../public/images/guzLogo.png" alt="Logo" />

        <div className='containerLi'>
          <div>
            <Link style={{ background: navBarTheme.background, color: navBarTheme.font }} to="/">Home</Link>
          </div>
          {/* <Link to="/detail">Detail</Link> */}

          <div>
            <Link style={{ background: navBarTheme.background, color: navBarTheme.font }} to="/favs">Favs</Link>
          </div>

          <div>
            <Link style={{ background: navBarTheme.background, color: navBarTheme.font }} to="/contact">Contact</Link>
          </div>
          <button onClick={handleChangeTheme}
            style={{ background: navBarTheme.background, color: navBarTheme.font }}
          ><i className="fa-solid fa-circle-half-stroke"></i></button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar