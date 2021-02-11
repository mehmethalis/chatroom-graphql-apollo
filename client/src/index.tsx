import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

