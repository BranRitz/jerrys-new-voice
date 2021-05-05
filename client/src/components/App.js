import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar/Navbar";
import './App.css';
import * as actions from '../store/actions/ActionTypes'
const App = (props) => {

    useEffect(() => {
        this.props.onTryAutoSignup();
    });

    return (
            <div className="App">
                <Navbar {...this.props}> </Navbar>
            </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

