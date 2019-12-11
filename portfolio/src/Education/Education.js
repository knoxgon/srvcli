import React from 'react';
import './Education.css';

class Education extends React.Component {
  render() {
    return (
      <span>
        <section className="education_container">
          <div className="education_container__leftSideFixed">
            <h3>{this.props.eduPeriod}</h3>
          </div>
          <div className="education_container__rightSide">
            <span>
              <img src={require('../images/ico/university.ico')} alt=""></img>
              <h4>{this.props.eduUni}</h4>
            </span>
            <span>
              <img src={require('../images/ico/educational-programs.ico')} alt=""></img>
              <p>{this.props.eduProgramme}</p>
            </span>
            <span>
              <img src={require('../images/ico/location.ico')} alt=""></img>
              <p>{this.props.eduLocation}</p>
            </span>
          </div>
        </section>
      </span>
    );
  }
}

export default Education;
