import React, { Component } from "react";
import Comments from "../Comments/Comments";
import config from "../config";
import { Link } from "react-router-dom";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    const URL = `${config.API_URL}/api/article/${
      window.location.pathname.split("/")[2]
    }`;
    fetch(URL, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: config.JWT_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          article: data,
        })
      );
  }

  render() {
    return this.state.article.map((article, i) => (
      <div className="article-box" key={i}>
        <div className="articles-link">
          <Link to="../Articles">Articles</Link>
        </div>
        <div className="article-container">
          <h2 className="article-title">{article.title}</h2>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
        <Comments article_id={window.location.pathname.split("/")[2]} />
      </div>
    ));
  }
}
