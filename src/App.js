import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp from './CommentApp'
import GraphQLDemo from './GraphQLDemo'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; // For user-authentication logIn, logOut
import Amplify, { Auth } from 'aws-amplify';        //Auth might be deleted
import awsconfig from './aws-exports';

import { API, graphqlOperation } from 'aws-amplify';

import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos, getTodo } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions';



Amplify.configure(awsconfig);
function App() {
  return (
    <div>
    <CommentApp />,
    <GraphQLDemo />,
    <AmplifySignOut />

    </div>
    //document.getElementById('root')
  );
}

export default withAuthenticator(App);
