import React from "react";
import TimeAgo from "react-timeago";

const MessageList_Item = ({message}: any) => {
    return (
        <li key={message.id}>
            <div className="title">
                <span className={'username'}>@{message.user.userName} </span>
                {message.text}
            </div>
            <div className="date">
                <span><TimeAgo date={message.createdAt}/></span>
            </div>
        </li>
    )
}
export default MessageList_Item;