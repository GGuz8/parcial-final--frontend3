import {useGlobalContext} from "../context"


const Layout = ( {children}) => {
    
    const {theme} = useGlobalContext()
  
    return ( 
        <div className="main" style={{background: theme.background, color: theme.font}}>
            {children}
        </div>
  )
}

export default Layout