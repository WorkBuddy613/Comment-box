import React from 'react'

const Comment = (props) =>{
    //const {username, comment} =  props.comment;
    const username = props.comment.username;
    //const comment = props.comment.comment;
    const comment = props.comment.content;
    console.log(username, comment);
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{username}</span>
                </div>
                <p>{comment}</p>
            </div>
            )
    
}

export default Comment