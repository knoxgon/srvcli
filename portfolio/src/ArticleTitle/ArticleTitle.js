import React from 'react';
import './ArticleTitle.css';

class ArticleTitle extends React.Component {
  render() {
    return(
      <h1 className="profile_article__title">
        {this.props.image ? <img src={this.props.image} width="25" height="25" alt=""></img> : null}
        <span>{this.props.title}</span>
      </h1>
    );
  }
}

export default ArticleTitle;
