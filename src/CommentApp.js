import React, { Component } from "react";
import CommentInput from "./CommentInput"
import CommentList from "./CommentList"

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state={
            comments: []
        }
    }
    
    commentSubmit(comment){
     this.state.comments.push(comment)
     this.setState({
         comments:this.state.comments
     })
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput contentSubmit={this.commentSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}


export default CommentApp;
