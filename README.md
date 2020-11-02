# This is the attempt for comment-box


## initial commit

<div align="center">
  <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/inputComment.gif" width="700px" />
  <p>InputComment</p>
</div>

<div align="center">
  <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/submitWithoutUsername.gif" width="700px" />
  <p>SubmitWithoutUsername </p>
</div>

<div align="center">
  <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/submitWithoutComment.gif" width="700px" />
  <p>SubmitWithoutComment </p>
</div>

## 10.20 add authentication + getUser

### To play with the public website online

https://getcurrentuser.d3spp65mw1h9ep.amplifyapp.com/
<div align="center">
 <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/addGetUserInfo.png"  width="700px" />
 <p>mainChange: could fetch userInfo from Auth.currentAuthenticatedUser</p>
</div>

### To run locally

U may need to follow the [tutorial(part 1-3)](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/) to install Amplify CLI then run `npm start`

### Notes:

1. Main API used from Amplify:

Auth.currentAuthenticatedUser(): https://docs.amplify.aws/lib/auth/manageusers/q/platform/js#retrieve-current-authenticated-user

2. Previous commits about authentication setup:

https://github.com/WorkBuddy613/Comment-box/commit/5ffb74563664bf1fa6c93414e5de9e176e0a7ac4

## 11.1 add database(GraphQL) and support multi-user posting&storage comment

### What's new this time:

- Database on AWS created 
- Now support multi-user posting & storage comment

### public website to play with:  

https://graphqldemo.d3spp65mw1h9ep.amplifyapp.com/
<div align="center">
 <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/addGraphQL.png"  width="700px" />
 <p>mainChange: could store data on cloud</p>
</div>


### Main code of this commit:

1. [CommentApp.js](src/CommentApp.js) which contains main frontend code including upload&download 
2.  [schema.graphql](amplify/backend/api/myAPI/schema.graphql) which contains main database code

### Learning resource for GraphQL x React:

1. Start with this tutorial first: https://docs.amplify.aws/start/getting-started/installation/q/integration/js#install-and-configure-the-amplify-cli
    My updates in CommentApp.js is mainly from this

2. Then this one: https://docs.amplify.aws/lib/graphqlapi/advanced-workflows/q/platform/js#complex-objects
You may find my notes for this tutorial in [GraphQLDemo.js](src/GraphQLDemo.js) and [GraphQLConfiguration.js](src/GraphQLClientConfiguration.js)


## Design structure

<div align="center">
  <img src="https://github.com/WorkBuddy613/Comment-box/blob/main/public/CommentsApp.png" width="700px" />
  <p>CommentApp detailed design</p>
</div>


## Note

Main design code is at ["public/Comment.json"](https://github.com/WorkBuddy613/Comment-box/blob/comment-box/public/Comment.json) or the img above(public/CommentsApp.png)

This code reference https://github.com/huzidaha/react-naive-book-examples/tree/master/comment-app

It's almost a duplicate of ⬆️   code just add more comments for code.




## Original README from facebook's create-react-app:


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

 `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
