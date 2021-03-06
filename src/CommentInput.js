import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log(user);
            this.setState({
            username: user.username  //this will get current username
                })
            })
        .catch(err => console.log(err));
    {/*Note: on default, react use state to record anything with state*/}
    }

    handleCommentChange (event) { //Listen for content change (i.e. user enters content)
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit (event){   //Listen for Submit button (i.e. user clicks on submit)
        if (this.props.onSubmit){
            if (!this.state)
                return
            if (!this.state.username) 
                return alert('Username is empty')
            if (!this.state.content)
                return alert('Please enter your content')
            this.props.onSubmit({
                username: this.state.username, 
                content: this.state.content,
            })
        }
        this.setState({ content: '' })
    }

    render(){
        
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username:</span>
                    <p> {this.state.username} </p> 
                {/*Note: This part is only for demo purpose. It will be removed/redesigned in the future*/}
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea 
                        value={this.state.content}
                        onChange={this.handleCommentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-publish-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        publish
                    </button>
                </div>
                {/*New tags learned this time: */}
                {/*span: put everything in one line*/}
                {/*textarea vs input:   multiple lines / one line input*/}
             </div>
            )
    }
}

export default CommentInput;

