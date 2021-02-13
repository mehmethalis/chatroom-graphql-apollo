import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {ApolloClient, InMemoryCache, HttpLink, split, ApolloProvider, ApolloLink} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';


const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: localStorage.getItem("token") || null
        }
    });
    return forward(operation);
});

const httpLink = middlewareLink.concat(new HttpLink({
        uri: process.env.REACT_APP_GRAPHQL_URI
    })
)


const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_WEBSOCKET_URI}`,
    options: {
        reconnect: true,
    },
});


const hasSubscriptionOperation = ({query: {definitions}}: any) => {
    return definitions.some(({kind, operation}: any) => kind === 'OperationDefinition' && operation === 'subscription');
};

const link = split(
    hasSubscriptionOperation,
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);

