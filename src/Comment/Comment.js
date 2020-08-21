import React, { Component } from 'react';
import config from '../config';
import { UserContext } from '../context'

export default class Comment extends Component {
  static contextType = UserContext;
  submitComment = (e) => {
    e.preventDefault();
    const URL = `${config.API_URL}/api/${window.location.pathname.split('/')[2]}/comment`;
    const comment = e.target.content.value;
    const user_id = this.context.user_id;
    const content = {comment, user_id}
    fetch(URL, {
      method: "POST", 
      mode: "cors", 
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
        Authorization: config.JWT_TOKEN
      },
      body: JSON.stringify(content)
    })
    console.log(URL, " and", this.context.user_id)
  }
  render() {
    return(
      <div id='comment-container'>
        <form onSubmit={this.submitComment}>
          <h3>Comment</h3>
          <input type="hidden" value={this.context.user_id} />
          <label id='comment-label'>Type your comment below:</label>
          <textarea id="comment-text" name="content"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}