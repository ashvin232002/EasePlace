import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import SnackBar from './SnackBar'
function Layout({children,snackBar,message,color,setSnackBar}) {
  return (
   <>
        <NavBar/>
        {snackBar&&<SnackBar color={color} message={message} setSnackBar={setSnackBar}/>}
        <main>{children}</main>
          <Footer/>
   </>
  )
}

export default Layout