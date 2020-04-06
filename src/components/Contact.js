import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online: props.online
    };
  }
  render() {
    return (
  <div className="Contact" onClick={event => {
    const newOnline = !this.state.online;
    this.setState({ online: newOnline });
  }} >
    <img className="avatar" src={this.props.avatar} alt={this.props.avatar} />
    <div>
      <h3 className="name">{this.props.name}</h3>
      <div className="status">
        <span className={this.state.online ? "status-online" : "status-offline"} />
        <p className="status-text">{this.state.online ? "online" : "offline"}</p>
      </div>
    </div>
  </div>
    );
  }
}

export default Contact;
