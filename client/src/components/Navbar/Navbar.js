import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { MenuItemsLoggedOut } from "./MenuItemsLoggedOut";

import { Button } from "../Button";
import './Navbar.css';
import Home from '../Home/Home';
import Analysis from '../Analysis/Analysis';
import Help from '../Help/Help';
import History from '../History/History';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';


import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class Navbar extends Component {

    state = {
        clicked: false
    }

    clickHandler = () =>  {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        let showItems = MenuItems;
        if (this.props.isAuthenticated) {
        showItems = MenuItemsLoggedOut;
        }
        return(
            <Router>
                <div>
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">Jerry's New Voice<i className="fas fa-brain"/></h1>
                        <div className="menu-icon" onClick={this.clickHandler}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                            {showItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <NavLink to={item.url} exact>
                                        <a className={item.cName}>
                                            {item.title}
                                        </a>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button>Sign Up</Button>
                        </Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/history" exact component={ History } />
                        <Route path="/analysis" exact component={ Analysis } />
                        <Route path="/help" exact component={ Help } />
                        <Route path="/login" exact component={ Login } />
                        <Route path="/signup" exact component={ Signup } />

                    </Switch>
                </div>
            </Router>
        )

    }
}

export default Navbar;