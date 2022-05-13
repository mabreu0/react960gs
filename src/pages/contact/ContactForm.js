import React from 'react';
import { useState } from "react";
import "./contact.css";

const chandler = (event) => {
    if(event) {
        event.preventDefault();
    } else {
        throw Error("Not able to catch event in chandler");
    }

   //console.log("Reacting to form submitting");
   console.log(event.target.name.value + " ++ " + event.target.email.value + " ++ " + event.target.message.value);
};

const ContactForm = (props) => {
    const [name, updateName] = useState("Nombre");
    const [email, updateEmail] = useState("Email");
    const [msg, updateMessage] = useState("Mensaje");

    return (
        <div className="formdiv row">
            <div className="column">
                <form id="cform" onSubmit={chandler}>
                    <label htmlFor="_name">Name:</label>
                    <input onChange={(event) => updateName(event.target.value)}
                        type="text" 
                        name="name" 
                        id="_name"
                        placeholder={name}>
                    </input>

                    <label htmlFor="_email"> Email:</label>
                    <input onChange={(event) => updateEmail(event.target.value)}
                        type="text" 
                        name="email" 
                        id="_email"
                        placeholder={email}>
                    </input>

                    <label htmlFor="_message">Message:</label>
                    <input onChange={(event) => updateMessage(event.target.value)}
                        type="text" 
                        name="message" 
                        id="_email"
                        placeholder={msg}>
                    </input><br />

                    <input type="submit" value="logg"></input>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;