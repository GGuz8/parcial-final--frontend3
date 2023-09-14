import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Layout from './Components/Layout'
import Body from './Components/Body'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { GlobalContextProvider, themes } from './context'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'



function App() {

  const [theme, setTheme] = useState(themes.light)

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }


  return (
    <>
      <div className='app'>
        <GlobalContextProvider>

          <Layout>
             <Navbar/>
             <Body/>
          </Layout>

        </GlobalContextProvider>


      </div>
    </>
  )
}

export default App
