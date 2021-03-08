import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';
import Home from '../Home/Home';
import Analysis from '../Analysis/Analysis';
import Help from '../Help/Help';
import History from '../History/History';


import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class Navbar extends Component {

    state = {
        clicked: false
    }

    clickHandler = () =>  {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <Router>
                <div>
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">Jerry's New Voice<i className="fas fa-brain"></i></h1>
                        <div className="menu-icon" onClick={this.clickHandler}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                            {MenuItems.map((item, index) => {
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
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/history" exact component={ History } />
                        <Route path="/analysis" exact component={ Analysis } />
                        <Route path="/help" exact component={ Help } />
                    </Switch>
                </div>
            </Router>
        )

    }
}

export default Navbar;