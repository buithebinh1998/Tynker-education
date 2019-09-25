import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
const Layout = props => (
    <div>
        <Navbar/>
            <main>
                {props.children}
            </main>
        <Footer/>
    </div>
)

export default Layout