import React, { Component } from "react";
import {Link} from "react-router-dom"
import config from "../config";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    const URL = `${config.API_URL}/api/${this.props.article_id}/comments`;
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
  deleteComment = (e) => {
    e.preventDefault();
    const URL = `${config.API_URL}/api/comment/${e.target.value}`
    fetch(URL, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => {
      if(!res.ok) {
        return {error: {message: 'comment not deleted'}}
      }
      res.json()
    })
  }
  render() {
    return (
      <div id='comments-container'>
        <h3>Comments <Link to={`/Comment/${window.location.pathname.split('/')[2]}`} id="fa-plus" className="fa fa-plus"></Link></h3>
        {this.state.comments.map((comment, i) => {
          return (
            <div className='comment-box' key={i}>
              <h4>Posted by: <span className='username'>{comment.username}</span></h4>
              <p>{comment.comment}</p>
              <button id='trash-button' onClick={this.deleteComment} value={comment.comment_id} className="fa fa-trash"></button>
            </div>
          );
        })}
      </div>
    );
  }
}
