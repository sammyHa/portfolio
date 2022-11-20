import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import home_icon from '../icons/menu-icon.png'
import project_icon from '../icons/briefcase-arrow-left-right.png'
import contact_icon from '../icons/contact.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
  }from "react-router-dom";

class Navbar extends Component {
    render () {
        return (
            <>
            <nav className="NavbarItems">

                <div className='home'>
                    
                    <Link to='/'>
                    <img src={home_icon} />
                    </Link>                    
                </div>

                <div className='project'>
                    <Link to='/projects'>
                    <img src={project_icon} /> 
                    </Link>
                </div>

                <div className='contact'>
                    <Link to='/contact'>
                    <img src={contact_icon} /> 
                    </Link>
                </div>
            </nav>

            </>
        );
    }
}

export default Navbar;