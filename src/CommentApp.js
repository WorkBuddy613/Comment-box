//Reference for CommentApp: http://huziketang.mangojuice.top/books/react/lesson14
//Reference for GraphQL x AWS x React: https://docs.amplify.aws/start/getting-started/nextsteps/q/integration/js
import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment, updateComment} from './graphql/mutations';
import { listComments } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions';
import 'tachyons';

/*
what: aync function to create new comment in database(cloud)
input: comment e.g. {username: 'huangxiao', content: 'my 1st comment'}
*/

async function createNewComment(comment){
    const newCommentDetails = { username: comment.username, content: comment.content};
    const newComment = await API.graphql(graphqlOperation(createComment, {input: newCommentDetails}));  
    /*
    createComment learning note:
    1. AppSync will generate created&updatedAt automatically here 
    2. graphqlOperation is a helper function. 
    Without it, it wil look more verbose like ⬇️: //But seems fine haha
    const newTodo = awiat API.graphql({ query: createTodo, variable: {input: todoDetails}})  
    */    
    console.log("new comment created in database successfully", newComment);
}

/*
what: aync function to fetch all current Comments from database(cloud)
input: currently NULL
       TO-DO: filter by lessonID
*/
async function listCurrentComments(){ 
    const allComments = await API.graphql(graphqlOperation(listComments));
    console.log("Fetch current comments from database successfully", allComments);
    return allComments;
}


class CommentApp extends Component {

    /*
    what: initialize this.state.comments with current commentList in database(cloud)
    */
    constructor(){ 
        super()
        this.state = {
            comments: [],
        }
        listCurrentComments().then((evt) => {
                evt.data.listComments.items.map((comment, i)=> {
                    this.state.comments.push({username: comment.username, content: comment.content});
                });
                this.setState({
                    comments: this.state.comments
                })
            }) 
    }

    /*
    what: Add current comment into CommentList + Update the CommentList display on the web
    how:
    1. create new comment in db
    2. update the current commentList display (will do it locally instead of fetching from cloud to improve performance)
    */
    handleSubmitComment(comment){ 
        createNewComment(comment);
        this.state.comments.push(comment)  
        this.setState({
            comments: this.state.comments
        })
        console.log("SubmitComment finishes, currently there are %d comments in total", Object.keys(this.state.comments).length)
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