import React from 'react';
import { Navbar } from '../../common';

import './Header.css'

function Header () {

    return (

        <section className="header">

            {/* top header */}
            <section className="header-top">

                {/* logo */}
                <section className="header-top__logo">
                    <a href="/" className="header-logo"> waddle </a>
                </section>

                {/* navbar */}
                <section className="header-top__navbar">
                    <Navbar />
                </section>



            {/* end of top header */}
            </section>


            {/* bottom header */}
            <section className="header-bottom">




                {/* welcome user */}
                <section className= "header-bottom__welcome">
                    Welcome User


                </section>

             {/* end of bottom header */}
            </section>

        </section>

    )
}

export default Header;