import React from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
import JoinedUs from "./JoinedUs";

const Home = ({session}: any) => {
    return (
        <>
            <div className="description">
                <p className="sub_header__desc">simple chat app with <span>react</span>.</p>
            </div>
            <NewMessageForm session={session} />
            <JoinedUs/>
            <MessageList/>
        </>
    )
}
export default Home;