import React, { Component } from 'react';

export default class Comments extends Component {
  render() {
    return(
      <div>
        <div>
          <h3>Comments</h3>
          <h4>user 1</h4>
          <p>
            This is a comment about the post above. I cannot read it because it
            is in Chinese.
          </p>
          <h4>user 4</h4>
          <p>
            Actually it is in fake latin. No one can read it. Except for maybe
            Latinaughts.
          </p>
          <h4>user 2</h4>
          <p>LOL! Latinaughts....</p>
        </div>
      </div>
    )
  }
}