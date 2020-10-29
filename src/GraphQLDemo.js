import { API, graphqlOpetation } from 'aws-amplify';

import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos, getTodo } from './graphql/quries';
import { onCreateTodo } from './graphql/subscriptions';

const newTodoDetails = { name: "My first todo", description: "Hello world!"};

//createTodo Note: AppSync will generate created&updatedAt automatically here
const newTodo = await API.graphql(graphqlOperation(createTodo, {input: newTodoDetails})); 
//Learning Note: graphqlOperation is a helper function. 
//Without it, it wil look more verbose like ⬇️: //But seems fine haha
//const newTodo = awiat API.graphql({ query: createTodo, variable: {input: todoDetails}})

const updatedTodoDetails = { id: "id1", description:"Updated todo info"};
const updatedTodo = await API.graphql(graphqlOperation(updateTodo, {input: updatedTodoDetails}));

const deleteTodoDetails = {id: "id1" }; //only id is needed here
const deletedTodo = await API.graphql(graphqlOperation(deleteTodo, {input: { id: todoId}}));

const allTodos = await API.graphql(graphqlOperation(listTodos));

//TypeScript version: I don't think we need it though
//const allTodos = await (API.graphql({ query: queries.listTodos }) as Promise<ListTodoResult>);

//query using 1 parameter
const oneTodo = await API.graghql(graphqlOpetation(getTodo, {id: 'id1'}));


//subcribe to creation of Todo Similar to the `handleCommentChange` `handleSubmit function in CommentInput.js`
// In this way, server could send data to its clinets when a specific event(=> real-time data integration)
const subscription = API.graphql(
    graphqlOpetation(onCreateTodo)
    ).subscribe({
        next: (todoData) => {
            console.log(todoData); // ??? not understand what next mean; not seen in subscriptions.js
            //Do sth with the data
        }
    })

// If using AppSync subscriptions, the configuration of AppSync should be at the root of the configuration object, instead of under API
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'xxx',
//     region: 'xxx' ,
//     cookieStorage: {
//       domain: 'xxx',
//       path: 'xxx',
//       secure: true
//     }
//   },
//   aws_appsync_graphqlEndpoint: 'xxxx',
//   aws_appsync_region: 'xxxx',
//   aws_appsync_authenticationType: 'xxxx',
//   aws_appsync_apiKey: 'xxxx'
// });
// stop receiving data updates from sbuscription
subscription.unsubscribe();

//Creating a post is restricted to IAM
const createdTodo = await API.graphql({
    query: queries.createTodo,
    variables: {input: todoDetails},
    authMode: 'AWS_IAM' //when using WS_IAM for public API access, unauthenticated logins must be enabled.
});
// Normally the authorization mode should be done in const client（See GraphQLClientConfiguration.js）. 
// However, if we wanna override the default authorization mode, we could do so by passing an `authMode`
//configure API Key

