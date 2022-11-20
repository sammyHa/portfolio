import React, { Component } from "react";
import './Contacts.css'
export default class Contact extends Component {
    render() {
        return (
            <>

                <div className="contacts-container">
                    <p>Contact Us</p>
                    <div className="form-box">
                    <input type= "text" placeholder="Name" />
                    <input type= "text" placeholder="Email" />
                    <textarea className="textarea-box" rows={3} cols = {33} placeholder="Message" />

                    
                    </div>
                    <button className="send-email">Send</button>
                </div>
            
            </>
        );
    }
}