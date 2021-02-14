import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {GET_ACTIVE_USER} from "../queries";
import {Query} from "@apollo/client/react/components";


const AuthHOC = (condition: any) => function (Component: any) {
    return function (props: any) {
        return (
            <Query query={GET_ACTIVE_USER}>
                {
                    ({data, loading, refetch}: any) => {
                        if (loading) return null

                        return condition(data) ? <Component {...props}/> : <Redirect to={'/'}/>
                    }
                }
            </Query>
        )
    }
};

export default AuthHOC;