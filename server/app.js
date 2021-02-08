const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express');
const {importSchema} = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

//models
const User = require('./Models/User');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers,
    context: {
        User
    }
});

//db
mongoose.connect(process.env.MONGO_DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('✔ MongoDB connected'))
    .catch((error) => console.log('✘ Could not connect to MongoDB. ----> ' + error))


const app = express();
server.applyMiddleware({app});

app.listen({port: process.env.PORT}, () => {
    console.log(`✔ Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
});