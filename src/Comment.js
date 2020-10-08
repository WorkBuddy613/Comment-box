import React from 'react'

const Comment = (props) =>{
    const {username, comment} =  props.comment;
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