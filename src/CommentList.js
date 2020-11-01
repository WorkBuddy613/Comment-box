import React, { Component } from 'react';
import Comment from './Comment';


class CommentList extends Component {
     static defaultProps = {
          comments: []
        }
        
    render(){
      //   const comments = [
      //    {username: 'Jerry', comment: 'Hello'},
      // {username: 'Tomy', comment: 'World'},
      // {username: 'Lucy', comment: 'Good'}
      // ]
      //comments = this.props.comments
      console.log(this.props.comments);
        return (
            <div> 
                {this.props.comments.map((comment, i) => 
                    <Comment comment={comment} />
                    )}
                    {
                    //if without `Comment` Code should be like:
                    //return (
                    //    <div key={i}>
                    //        {comment.username}: {comment.comment}
                     //   </div>
                     //   )})
                    }
            </div>
            )
    }
}

export default CommentList;