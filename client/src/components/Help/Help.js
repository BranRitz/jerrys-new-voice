import React from 'react';
import './Help.css';
import HeaderText from "../HeaderText/HeaderText";
import ContactForm from './ContactForm';

const Help = (props) => {

    return (
            <div className="AllText">
                <div className="HelpText">
                    <HeaderText HeaderName="FAQ" />
                    <ul id="Faq">
                        <li> > Who all can use benefit from this site? </li><br/>
                        <li> > Is it free to get an account? </li><br/>
                        <li> > Is this site actively maintained? </li><br/>
                    </ul>
                </div>
                <div className="ContactFormElem">
                    <ContactForm />
                </div>
            </div>
    );
}

export default Help;