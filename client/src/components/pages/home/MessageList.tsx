import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {useQuery} from "@apollo/client";
import {GET_MESSAGES, MESSAGE_CREATED} from "../../../queries";
import MessageList_Item from "./MessageList_Item";

const MessageList = () => {
    const {loading, error, data, subscribeToMore} = useQuery(GET_MESSAGES);

    return (
        <div>
            {
                subscribeToMore({
                    document: MESSAGE_CREATED,
                    updateQuery: (prev, {subscriptionData}) => {
                        if (!subscriptionData.data) return prev;

                        const newItem = subscriptionData.data.messageSent;
                        if (!prev.messages.find((message: any) => message.id === newItem.id)) {
                            return {
                                ...prev,
                                messages: [newItem, ...prev.messages]
                            }
                        } else {
                            return prev;
                        }
                    }
                })
            }
            <ul className="snaps">
                {
                    data && data.messages.map((message: any) => <MessageList_Item key={message.id} message={message}/>)
                }
            </ul>
            <div className="counter">{data && data.messages.length} snap(s)</div>
            {loading && <ClipLoader/>}
            {error && <p> {error.message} </p>}
        </div>
    )
}

export default MessageList;