import React from "react";
import { Link } from "react-router-dom";
import Cable from 'actioncable';

class Navbar extends React.Component {
  UNSAFE_componentWillMount() {
    this.createSocket();
  }
  state = {
    notification: '',
    showNotifi: false
  };
  notification = {};

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3000/cable');
    this.chats = cable.subscriptions.create({
      channel: 'NotificationChannel'
    }, {
      connected: () => { },
      received: (data) => {
        this.notification = data
        this.setState((state, props) => ({ notification: props.notification }))


      }
    });
  }

  render() {
    const Notification = (props) => {
      if (props.notice) {
        return <div className="alert alert-success in">
          <button type="button" className="close" data-dismiss="alert">×</button>
          <div id="flash_notice">{props.notice}</div></div>
      } else if (props.danger) {
        return <div className="alert alert-danger in">
          <button type="button" className="close" data-dismiss="alert">×</button>
          <div id="flash_notice">{props.danger}</div></div>
      }
    };
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3" id="horizontal_navbar">
          <a className="navbar-brand" href="#">
            <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
        <h3>{Notification(this.notification)}</h3>
      </React.Fragment>
    );
  }
}

export default Navbar;