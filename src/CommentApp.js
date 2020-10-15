//Reference: http://huziketang.mangojuice.top/books/react/lesson14
import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import 'tachyons';


class CommentApp extends Component {

    constructor(){ //father initialize + set attribute-comments
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment){ //Add current comment into CommentList + Update the CommentList display on the web
        console.log(comment)
        this.state.comments.push(comment) //TO-DO: React insists on Imutability of state.  
        this.setState({
            comments: this.state.comments
        })
        console.log(Object.keys(this.state.comments).length)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput 
                    onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
            )
    }
}

export default CommentApp;