import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (props) => (
    <>
        <Navbar />
        {props.children}
        <Footer />
    </>
)

export default Layout
