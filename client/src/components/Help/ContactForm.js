import React, { useState } from 'react';

const ContactForm = (props) => {
    const handleSubmit= (e) => {
          e.preventDefault();
          // ???
        }

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userMsg, setUserMsg] = useState();

    return (
      <form onSubmit={e => {handleSubmit(e)}}>
            <h1>Contact Me</h1>
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
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm;