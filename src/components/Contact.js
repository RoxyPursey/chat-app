import React from 'react';
import './Contact.css';

const name = "Erika Barnes"
const avatar = "https://randomuser.me/api/portraits/women/76.jpg"
const online = "true"

function Contact() {
    return (
      <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <span className={online ? "status-online" : "status-offline"}></span>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
    );
  }

  export default Contact;
