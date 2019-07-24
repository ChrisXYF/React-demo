import React, { Component } from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
            timeString :''
        }
    }
    componentWillMount(){
        this._updateTime()
         this._timer = setInterval(
          this._updateTime.bind(this),
          5000
        )
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    _updateTime(){
        const comment= this.props.comment;
           const duration= (+Date.now() - comment.createTime)/1000;
           this.setState({
             timeString: duration>60?`${Math.round(duration / 60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
           })
    }
    render(){
        return (
           <div>
                <div className="comment">
        <div className="comment-user">
          <span>{ this.props.comment.username } </span>：
        </div>
        <p>{ this.props.comment.content }</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete'>
          删除
        </span>
      </div>
           </div>
        )
    }
}

export default Comment