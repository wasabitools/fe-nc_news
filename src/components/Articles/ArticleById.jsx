import React, { Component } from 'react';

class ArticleById extends Component {
  state={
    article: "",
  }
  render() {
    const {article}=this.state;
    return (
      <div>
        
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticleById();
  };

}

export default ArticleById;