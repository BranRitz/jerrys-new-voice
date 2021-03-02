import React from 'react';
import './MainText.css';
import HeaderText from "./HeaderText";


const MainText = (props) => {

    return (
            <div className="SampleText">
                <div className="AllText">
                    <HeaderText HeaderName="About Jerry's New Voice" />
                    <p className="BodyText">{ props.BodyText }</p>
                </div>
                <img className="MicrophoneImage" src={'../../../static/public/microphone.jpeg'} />
            </div>
    );
}

export default MainText;