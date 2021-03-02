import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';

class Navbar extends Component {

    state = {
        clicked: false
    }

    clickHandler = () =>  {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Jerry's New Voice<i className="fas fa-brain"></i></h1>
                <div className="menu-icon" onClick={this.clickHandler}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </nav>
        )

    }
}

export default Navbar;