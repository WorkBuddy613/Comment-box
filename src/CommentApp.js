//Reference: http://huziketang.mangojuice.top/books/react/lesson14
import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment, updateComment} from './graphql/mutations';
import { listComments } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions';
import 'tachyons';


async function createNewComment(comment){
    const newCommentDetails = { username: comment.username, content: comment.comment};
    const newComment = await API.graphql(graphqlOperation(createComment, {input: newCommentDetails}));
    console.log(newComment);
    //const newTodoDetails = { name: "My first todo", description: "Hello world!"};

    // //createTodo Note: AppSync will generate created&updatedAt automatically here
    // const newTodo =  await API.graphql(graphqlOperation(createTodo, {input: newTodoDetails})); 
    // console.log(newTodo);
    // const allTodos = await API.graphql(graphqlOperation(listTodos));
    // console.log(allTodos);
    // return newTodo;
    // //Learning Note: graphqlOperation is a helper function. 
    // //Without it, it wil look more verbose like ⬇️: //But seems fine haha
    // //const newTodo = awiat API.graphql({ query: createTodo, variable: {input: todoDetails}})         
}

async function getAllComments(){
    const allComments = await API.graphql(graphqlOperation(listComments));
    console.log(allComments);
    return allComments;
}

class CommentApp extends Component {

    constructor(){ //father initialize + set attribute-comments
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment){ //Add current comment into CommentList + Update the CommentList display on the web
        console.log(comment)
        createNewComment(comment);
        // API.graphql(graphqlOperation(onCreateTodo)).subscribe({
            
        // })
        this.state.comments = getAllComments();
        console.log(this.state.comments);
        //this.state.comments.push(comment) //TO-DO: React insists on Imutability of state.  
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