import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Layout from './Routes/Layout'
import Body from './Components/Body'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
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
        <Router>
          <GlobalContextProvider>

            <Layout>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favs' element={<Favs/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>  
              </Routes>
            </Layout>

          </GlobalContextProvider>
        </Router>


      </div>
    </>
  )
}

export default App
