import React from "react";
import {GET_ACTIVE_USER} from "../queries";
import {Query} from "@apollo/client/react/components";

const SessionWrapperHOC = (Component: any) => (props: any) => {
    return (
        <Query query={GET_ACTIVE_USER}>
            {
                ({data, loading, refetch}: any) => {
                    if (loading) return <div style={{textAlign: 'center'}}>Loading...</div>

                    return <Component {...props} refetch={refetch} session={data}/>
                }
            }
        </Query>
    )
};

export default SessionWrapperHOC;