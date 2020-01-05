import React from 'react'
import Navbar from "./Navbar"
import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "../styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;
