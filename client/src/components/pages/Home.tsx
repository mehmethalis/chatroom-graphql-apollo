import React from "react";
import {useQuery} from "@apollo/client";
import {GET_MESSAGES} from "../../queries";
import ClipLoader from "react-spinners/ClipLoader";
import TimeAgo from 'react-timeago';

const Home = () => {
    const {loading, error, data} = useQuery(GET_MESSAGES);

    return (
        <>
            <div className="description">
                <p className="sub_header__desc">simple chat app with <span>react</span>.</p>
            </div>

            <div>
                <form>
                    <input className="add-snap__input" type="text" placeholder="type message"/>
                </form>
            </div>
            <div>
                <ul className="snaps">
                    {
                        data && data.messages.map((message: any) => (<li key={message.id}>
                            <div className="title">
                                <span className={'username'}>@{message.user.userName} </span>
                                {message.text}
                            </div>
                            <div className="date">
                                <span><TimeAgo date={message.createdAt}/></span>
                            </div>
                        </li>))
                    }
                </ul>
                <div className="counter">{data && data.messages.length} snap(s)</div>
                {loading && <ClipLoader/>}
                {error && <p> {error.message} </p>}
            </div>


        </>
    )
}
export default Home;