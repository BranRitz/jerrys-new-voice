import React from 'react';
import './HeaderText.css';

const HeaderText = (props) => {
    return (
            <div className="HeaderText">
               <p>{props.HeaderName}</p>
            </div>
    );
}

export default HeaderText;