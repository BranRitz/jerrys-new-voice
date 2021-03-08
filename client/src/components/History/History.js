import React from 'react';
import './History.css';
import HeaderText from "../HeaderText/HeaderText";

const History = (props) => {

    return (
            <div className="AllText">
                <div className="AboutText">
                    <HeaderText HeaderName="Your Session History" />
                    <p className="BodyText">{ props.BodyText }</p>
                </div>
                <img className="MicrophoneImage" src={'../../../static/public/microphone.jpeg'} />
            </div>
    );
}

export default History;