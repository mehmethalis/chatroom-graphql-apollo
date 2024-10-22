const http = require('http');
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {ApolloServer, PubSub} = require('apollo-server-express');
const {importSchema} = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

//models
const User = require('./Models/User');
const Message = require('./Models/Message');

const pubSub = new PubSub();

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers,
    context: ({req}) => ({
        User,
        Message,
        pubSub,
        activeUser: req ? req.activeUser : null
    }),
    introspection: true
});

//db
mongoose.connect(process.env.MONGO_DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('✔ MongoDB connected'))
    .catch((error) => console.log('✘ Could not connect to MongoDB. ----> ' + error))


const app = express();

// enable cors
const corsOptions = {
    origin: '*',
    credentials: true // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));
app.use(async (req, res, next) => {
    const token = req.headers['authorization']
    if (token && token !== 'null') {
        try {
            const activeUser = await jwt.verify(token, process.env.JWT_SECRET)
            req.activeUser = activeUser;
        } catch (e) {
            console.log(e)
        }
    }

    next()
});

server.applyMiddleware({app});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({port: process.env.PORT}, () => {
    console.log(`✔ Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
});