import React from 'react';
import './ArticleTitle.css';

class ArticleTitle extends React.Component {
  render() {
    return(
      <h1 className="profile_article__title">
        <span>{this.props.title}</span>
      </h1>
    );
  }
}

export default ArticleTitle;
