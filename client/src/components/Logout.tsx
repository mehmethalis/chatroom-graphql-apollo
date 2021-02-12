import React from "react";
import {ApolloConsumer} from "@apollo/client";
import {withRouter} from "react-router-dom";

const onclick = (history: any, client: any) => {
    localStorage.setItem('token', '')
    history.push('/')
    client.resetStore()
}
const Logout = ({history}: any) => {
    return (
        <ApolloConsumer>
            {
                (client) => {
                    return <button onClick={() => onclick(history, client)}>Logout</button>
                }
            }
        </ApolloConsumer>
    )
}

export default withRouter(Logout);