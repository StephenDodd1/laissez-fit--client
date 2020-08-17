import React, { Component } from "react";
import Comments from "../Comments/Comments";
import { API_URL, JWT_TOKEN } from "../config";
import { Link } from 'react-router-dom'
export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    const URL = `${API_URL}/api/article/${
      window.location.pathname.split("/")[2]
    }`;
    fetch(URL, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: JWT_TOKEN,
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
      <div key={i}>
        <div className='articles-link'>
          <Link to="../Articles">Articles</Link>
        </div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <Comments article_id={window.location.pathname.split("/")[2]} />
      </div>
    ));
  }
}
