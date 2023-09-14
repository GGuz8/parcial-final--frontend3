import {useGlobalContext} from "../context"
import { useContext } from "react"

const Layout = ( {children}) => {
    
    const {theme} = useGlobalContext()
  
    return ( 
        <div style={{background: theme.background, color: theme.font}}>
            {children}
        </div>
  )
}

export default Layout