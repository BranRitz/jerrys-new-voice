import React from 'react';
import './Analysis.css';
import HeaderText from "../HeaderText/HeaderText";
import BodyText from "../BodyText"

const Analysis = (props) => {

    return (
            <div className="AllText">
                <div className="AboutText">
                    <HeaderText HeaderName="Progress Analysis" />
                    <p className="BodyText">{ BodyText.AnalysisText }</p>
                </div>
            </div>
    );
}

export default Analysis;