import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar";
import './App.css';
import MainText from "./Maintext/Maintext";

const App = (props) => {
    return (
        <div className="App">
            <Navbar />
            <MainText BodyText="Jerry's New Voice (JNV) provides a platform for those who need to practice speaking in
            order to require verbal language speaking abilities. One can select different lists of words based on a
            category and level, and a session consists of repeating each word as it appears on the screen. JNV then gives a score for each word, and tracks one progress as they continue to practice throughout multiple sessions." />
        </div>
    );
}

export default App;

