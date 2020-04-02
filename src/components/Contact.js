import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ name, avatar, status }) => (
  <div className="Contact">
    <img className="avatar" src={avatar} alt={name} />
    <div>
      <h3 className="name">{name}</h3>
      <div className="status">
        <span className={status ? "status-online" : "status-offline"} />
        <p className="status-text">{status ? "online" : "offline"}</p>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
};
export default Contact;
