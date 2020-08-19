import React, { Component } from "react";
import { Link } from "react-router-dom";
import { JWT_TOKEN, API_URL } from "../config";

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    const URL = `${API_URL}/api/articles`;
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
          articles: data,
        })
      );
  }
  render() {
    const fitnessArticles = this.state.articles.filter(
      (topic) => topic.topic === "Fitness"
    );
    const fitnessArticlesList = fitnessArticles.map((article, i) => {
      console.log(article.content);
      return (
        <li key={i}>
          <Link to={`/Article/${article.articleId}`}>{article.title}</Link>
        </li>
      );
    });
    const nutritionArticles = this.state.articles.filter(
      (topic) => topic.topic === "Nutrition"
    );
    const nutritionArticlesList = nutritionArticles.map((article, i) => (
      <li key={i}>
        <Link to={`/Article/${article.articleId}`}>{article.title}</Link>
      </li>
    ));
    const metricsArticles = this.state.articles.filter(
      (topic) => topic.topic === "Metrics"
    );
    const metricsArticlesList = metricsArticles.map((article, i) => (
      <li key={i}>
        <Link to={`/Article/${article.articleId}`}>{article.title}</Link>
      </li>
    ));
    return (
      <div id="articles-container">
        <div className="articles-link">
          <Link to="Demo">Tracking</Link>
        </div>
        <div id="article-column-container">
          <div>
            <h3>Fitness</h3>
            <ul>{fitnessArticlesList}</ul>
          </div>
          <div>
            <h3>Nutrition</h3>
            <ul>{nutritionArticlesList}</ul>
          </div>
          <div>
            <h3>Measures of Health</h3>
            <ul>{metricsArticlesList}</ul>
          </div>
        </div>
      </div>
    );
  }
}
