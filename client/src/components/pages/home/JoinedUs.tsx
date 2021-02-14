import React from "react";
import {USER_CREATED} from "../../../queries";
import {useSubscription} from "@apollo/client";

const JoinedUs = () => {
    const {data, loading}: any = useSubscription(USER_CREATED)

    return (
        <>
            {!loading && <h4>@{data.user.userName} is joined to us.</h4>}
        </>

    )
}

export default JoinedUs;