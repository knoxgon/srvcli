import React from 'react';
import './Portfolio.css';
import ProfileStart from '../ProfileStart/ProfileStart';
import ProfileLinkage from '../ProfileLinkage/ProfileLinkage';
import ArticleTitle from '../ArticleTitle/ArticleTitle';

class Portfolio extends React.Component {
  render() {
    return (
      <article className="portfolio__main">
        <section className="portfolio__heads">
          <ProfileStart portImage="https://images.squarespace-cdn.com/content/v1/50f79c6fe4b00d3480c9bbf0/1535041848952-PEC7G24V06YWLOV8Q188/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Headshot_20170819_David-Braught_Richard_Waine_Lancaster_PA_0090-%28square+-+500+px+-+72+ppi+-+low+res%29.jpg"
                 imgWidth="100rem"
                 imgHeight="100rem"
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
      </article>
    );
  }
}

export default Portfolio;
