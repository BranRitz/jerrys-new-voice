import React, { useState } from 'react';
import * as emailjs from 'emailjs-com'

const ContactForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let templateParams = {
            from_name: userName,
            message: userMsg,
            user_email: userEmail
        }

        emailjs.send(
            'service_fdpnb6b',
            'template_hspidxn',
            templateParams,
            'user_VyRKRWpp0mtXrVNe1chAI'
        ).then(
            function(response) {
                alert("Email Successfully Sent!");
            },
            function(err) {
                alert("Email was not able to send.");
            }
        )
        e.target.reset();
    }

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userMsg, setUserMsg] = useState();

    return (
      <form onSubmit={e => {handleSubmit(e)}}>
            <div className="HeaderText">
                <h1 className="ContactMe">Contact Me</h1>
            </div>
            <label>Your Name:</label><br />
            <input
                name="UserName"
                type="text"
                onChange={e => setUserName(e.target.value)}
            /><br />
            <label>Your Email:</label><br />
            <input
                name="UserEmail"
                type="email"
                onChange={e => setUserEmail(e.target.value)}
            /><br />
            <label>Your Message:</label><br />
            <input
                name="UserMsg"
                type="textarea"
                placeholder="Hi, Brandi!"
                onChange={e => setUserMsg(e.target.value)}
            /><br />
            <input className="SubmitButton" type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm;