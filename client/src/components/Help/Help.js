import React from 'react';
import Faq from 'react-faq-component';
import './Help.css';
import HeaderText from "../HeaderText/HeaderText";
import ContactForm from './ContactForm';

const FaqData = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Is this service free?",
            content: "Yes, as of now, it is completely free to sign up and use this service."
        },
        {
            title: "Why is this called Jerry's New Voice?",
            content: "This website was named after my father, whose battle with aphasia has inspired this project."
        },
        {
            title: "How effective is this web application?",
            content: "This website is purely a passion project that I've created for my father. It is free to use, but there is not any research or statistics backing up this website."
        }
    ]
}

const Help = (props) => {

    return (
            <div className="AllText">
                <div className="HelpText">
                    <HeaderText HeaderName="FAQ" />
                    <div className="Faq">
                        <Faq data={FaqData} />
                    </div>
                </div>
                <div className="ContactFormElem">
                    <ContactForm />
                </div>
            </div>
    );
}

export default Help;