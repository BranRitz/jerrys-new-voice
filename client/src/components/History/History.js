import React from 'react';
import './History.css';
import HeaderText from "../HeaderText/HeaderText";
import BodyText from "../BodyText"

const History = (props) => {

    return (
            <div className="AllText">
                <div className="AboutText">
                    <HeaderText HeaderName="Your Session History" />
                    <p className="BodyText">{ BodyText.HistoryText }</p>
                </div>
            </div>
    );
}

export default History;