import React from 'react';
import './Analysis.css';
import HeaderText from "../HeaderText/HeaderText";

const Analysis = (props) => {

    return (
            <div className="AllText">
                <div className="AboutText">
                    <HeaderText HeaderName="FAQ" />
                    <p className="BodyText">{ props.BodyText }</p>
                </div>
                <img className="MicrophoneImage" src={'../../../static/public/microphone.jpeg'} />
            </div>
    );
}

export default Analysis;