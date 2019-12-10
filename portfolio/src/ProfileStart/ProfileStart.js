import React from 'react';
import './ProfileStart.css';

class ProfileStart extends React.Component {
  render() {
    return (
      <section>
        <span className="profile_start_art">
          <img id="profile_start_art__imgStyle" src={this.props.portImage} width={this.props.imgWidth} height={this.props.imgHeight} alt="Profile"></img>
          <span id="profile_start_art__group">
            <h1>{this.props.portName}</h1>
            <h3>{this.props.portJobTitle}</h3>
          </span>
        </span>
        <span className="profile_start_contact_info">
          {this.props.phoneInfo ?
              <a href={"tel: " + this.props.phoneInfo}>
                <img src={require("../ico/telephone.ico")} alt="phone"></img>
                &nbsp;{this.props.phoneInfo}
              </a> : null}
          {this.props.emailInfo ?
            <a href={"mailto: " + this.props.emailInfo}>
              <img src={require("../ico/email.ico")} alt="email"></img>
              &nbsp;{this.props.emailInfo}
            </a> : null}
        </span>
        <span className="profile_start_desc">
          <p id="profile_start__desc__description">{this.props.portDescription}</p>
        </span>
      </section>
    )
  }
}

export default ProfileStart;