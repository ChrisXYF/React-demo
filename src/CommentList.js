import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentList extends Component {
  static defaultProps = {
    comments: PropTypes.array
  };
  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => (
          <Comment comment={comment} index={index} key={+new Date()+index}/>
        ))}
      </div>
    );
  }
}
export default CommentList;
