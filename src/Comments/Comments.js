import React, { Component } from "react";
import { API_URL } from "../config";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    console.log(this.props.article_id);
    URL = `${API_URL}/api/${this.props.article_id}/comments`;
    fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({
        comments: data
      }));
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i}>
              <h4>{comment.username}</h4>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
