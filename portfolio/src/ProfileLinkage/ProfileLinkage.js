import React from 'react';
import './ProfileLinkage.css';

class ProfileLinkage extends React.Component {
  render() {
    return(
      <span className="profile_start_linkage">
          {this.props.githubLink ?
            <a href={this.props.githubLink}>
              <img src={require("../ico/github-logo.ico")} alt="github"></img>
              &nbsp;{this.props.githubLink}
            </a> : null}
          {this.props.linkedinLink ?
          <a href={this.props.linkedinLink}>
            <img src={require("../ico/linkedin-logo.ico")} alt="linkedin"></img>
            &nbsp;{this.props.linkedinLink}
          </a> : null}
          {this.props.facebookLink ?
          <a href={this.props.facebookLink}>
            <img src={require("../ico/facebook-logo.ico")} alt="facebook"></img>
            &nbsp;{this.props.facebookLink}
          </a> : null}
          {this.props.twitterLink ?
          <a href={this.props.twitterLink}>
            <img src={require("../ico/twitter-logo.ico")} alt="twitter"></img>
            &nbsp;{this.props.twitterLink}
          </a> : null}
          {this.props.stackoverflowLink ?
          <a href={this.props.stackoverflowLink}>
            <img src={require("../ico/stackoverflow-logo.ico")} alt="stackoverflow"></img>
            &nbsp;{this.props.stackoverflowLink}
          </a> : null}
        </span>
      );
  }
}

export default ProfileLinkage;