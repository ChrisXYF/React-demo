import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentList extends Component {
  static defaultProps = {
    comments: PropTypes.array
  };
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => (
          <Comment comment={comment} index={index} key={+new Date()+index} onDeleteComment={this.handleDeleteComment.bind(this)}/>
        ))}
      </div>
    );
  }
}
export default CommentList;
