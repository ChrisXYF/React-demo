import React, { Component } from "react";
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static defaultProps = {
        contentSubmit: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state={
            username: '',
            content: '',
            createTime: ''
        }
    }
    componentDidMount(){
        this.textarea.focus()
    }
    handleUsernameChange(event){
          this.setState({
              username: event.target.value
          })
    }
    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit(){
        if(this.props.contentSubmit){
              this.props.contentSubmit({
                  username:this.state.username,
                  content:this.state.content,
                  createTime:+new Date(),
              })
        }
    }
    render(){
        return (
            <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)} 
                  />
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className='comment-field-input'>
                <textarea
                  value={this.state.content}
                  onChange={this.handleContentChange.bind(this)} 
                  ref={(textarea)=>this.textarea=textarea}
                  />
              </div>
            </div>
            <div className='comment-field-button'>
              <button onClick={this.handleSubmit.bind(this)}>
                  发布
              </button>
            </div>
          </div>
        )
    }
}

export default CommentInput