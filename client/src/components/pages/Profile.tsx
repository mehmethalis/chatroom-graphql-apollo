import React from "react";
import Moment from "react-moment";

import AuthHOC from "../AuthHOC";

const Profile = ({session: {activeUser}}: any) => {
    return (
        <div>
            <h2>Profile</h2>
            <Moment date={activeUser.createdAt} format={"YYYY/MM/DD"}/>
            <h3>@{activeUser.userName}</h3>

        </div>
    )
}
export default AuthHOC((session: any) => session && session.activeUser)(Profile);