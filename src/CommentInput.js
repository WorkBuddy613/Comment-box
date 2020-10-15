import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            comment: ''
        }
        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            console.log(user);
            this.setState({
            username: user.username
                })
            })
        .catch(err => console.log(err));
    {/*Note: on default, react use state to record anything with state*/}
    }



    // handleUsernameChange (event){ //Listen for username change (i.e. user enters username)
    //     this.setState({
    //         username:event.target.value
    //     })
    // }

    handleCommentChange (event) { //Listen for comment change (i.e. user enters comment)
        this.setState({
            comment:event.target.value
        })
    }

    handleSubmit (event){   //Listen for Submit button (i.e. user clicks on submit)
        if (this.props.onSubmit){
            //const { username, comment } = this.state
            //console.log("Is going to submit", this.state.username, this,state.comment)
            //check username is not NULL, comment is not NULL
            if (!this.state)
                return
            if (!this.state.username) 
                return alert('Username is empty')
            if (!this.state.comment)
                return alert('Please enter your comment')
            this.props.onSubmit({
                username: this.state.username, 
                comment: this.state.comment,
            })
        }
        this.setState({ username: '', comment: ''})
    }

    render(){
        
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username:</span>
                    <p> {this.state.username} </p>
                    {
                        //<div className='comment-field-input'>
                        // <input 
                        // value={this.state.username}
                        // onChange={this.handleUsernameChange.bind(this)}
                        // />
                        // </div>
                    }
                    {/*Note: This username should be getting from user authentication in the future*/}
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea 
                        value={this.state.comment}
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

