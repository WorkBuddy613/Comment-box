import Amplify, { Auth } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    //jwt refers to JSON Web Tokens whish maybe provided by Cognito
  },
});

//configure Cognito User Pools
const client = new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth:{
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession().getIdToken(), getJwtToken()),
    }
});

// configure using IAM ???[TO BE explored] IAM and Cognito User pools difference???
const client = new AWSAppSyncClient({
    url: aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth:{
        type: AUTH_TYPE.AWS_IAM,
        credentials: () => Auth.currentCredentials(),
    }
})

//Website also provided OIDC authentication, but I don't think we will use it

//If using AWS AppSyncSDK/NodeJS rather than GraphQL client it will be sth that I couldn't understand emmm
// But put the link here: [GraphQL from NodeJS] https://docs.amplify.aws/lib/graphqlapi/graphql-from-nodejs/q/platform/js
