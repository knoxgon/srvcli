import React from 'react';
import './Portfolio.css';
import ProfileStart from '../ProfileStart/ProfileStart';
import ProfileLinkage from '../ProfileLinkage/ProfileLinkage';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Education from '../Education/Education';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educInfo: [
        {
          eduPeriod: "2015-2018",
          eduUni: "Blekinge Institute of Technology",
          eduProgramme: "Software Engineering",
          eduLocation: "Karlskrona - Sweden"
        },
        {
          eduPeriod: "2017-2018",
          eduUni: "Chulalongkorn University",
          eduProgramme: "Computer Engineering",
          eduLocation: "Bangkok - Thailand"
        }
      ]
    }
  }

  render() {
    return (
      <article className="portfolio__main">
        <section className="portfolio__heads">
          <ProfileStart portImage={require('../images/profpic.jpg')}
                 imgWidth="150rem"
                 imgHeight="150rem"
                 portName="Volkan Güven"
                 portJobTitle="Software Engineer"
                 portDescription="I am a junior engineer who likes to travel and bike. One of my big dreams is to create a fully automated buying platform where you can trade with anyone anywhere regardless of the industry without paying for the middle man. Currently studying Frontend Engineering @KYH (Higher Vocational Education)."
                 phoneInfo="+46 73 905 38 78"
                 emailInfo="volkan.guven@hotmail.se"
                 >
          </ProfileStart>
          </section>
          <section className="portfolio__heads">
            <ArticleTitle title="Social"></ArticleTitle>
            <ProfileLinkage
              githubLink="http://www.github.com/knoxgon"
              linkedinLink="https://www.linkedin.com/in/volkan-g%C3%BCven-108883133/"
              stackoverflowLink="https://stackoverflow.com/users/4393935/volkan-g%c3%bcven"
              twitterLink="https://twitter.com/Zeplin20"
              facebookLink="https://www.facebook.com/jktujozvjizqhrlyfhpdwhhwdhjjrepwsohdlqadlxgjtv"
            >
            </ProfileLinkage>
          </section>
          <section className="portfolio__heads">
            <header>
              <ArticleTitle image={require('../images/output-onlinepngtools.png')} title="Education"></ArticleTitle>
            </header>
            
            <Education
              eduPeriod="2015-2018"
              eduUni="Blekinge Tekniska Högskolan"
              eduProgramme="Software Engineering"
              eduLocation="Karlskrona - Sweden"
              >
            </Education>
          </section>
      </article>
    );
  }
}

export default Portfolio;
