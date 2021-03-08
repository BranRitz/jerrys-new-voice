import React from 'react';
import './Home.css';
import HeaderText from "../HeaderText/HeaderText";

const Home = (props) => {

    return (
            <div className="AllText">
                <div className="AboutText">
                    <HeaderText HeaderName="About Jerry's New Voice" />
                    <p className="BodyText">{ props.BodyText }</p>
                </div>
                <img className="MicrophoneImage" src={'../../../static/public/microphone.jpeg'} />
            </div>
    );
}

export default Home;