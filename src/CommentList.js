import React, { Component } from 'react';
import Comment from './Comment';


class CommentList extends Component {
     static defaultProps = {
          comments: []
        }
        
    render(){
        return (
            <div> 
                {this.props.comments.map((comment, i) => 
                    <Comment comment={comment} key={i} />
                    )}
                    {
                    /*
                    Note:
                    if without `Comment` Code should be like:
                    return (
                       <div key={i}>
                           {comment.username}: {comment.comment}
                       </div>
                       )})
                      */
                    }
            </div>
            )
    }
}

export default CommentList;