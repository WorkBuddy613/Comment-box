import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp from './CommentApp'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; // For user-authentication logIn, logOut
import Amplify, { Auth } from 'aws-amplify';        //Auth might be deleted
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
    <CommentApp />,
    <AmplifySignOut />
    </div>
    //document.getElementById('root')
  );
}

export default withAuthenticator(App);
