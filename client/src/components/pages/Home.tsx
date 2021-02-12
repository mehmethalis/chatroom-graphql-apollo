import React, {useState, useEffect} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_MESSAGE, CREATE_USER, GET_MESSAGES} from "../../queries";
import ClipLoader from "react-spinners/ClipLoader";
import TimeAgo from 'react-timeago';

const Home = ({session}: any) => {
    const {loading, error, data} = useQuery(GET_MESSAGES);
    const [addMessage, {loading: mutationLoading, error: mutationError}] = useMutation(ADD_MESSAGE,
        {refetchQueries: [{query: GET_MESSAGES}]});

    const [form, setForm] = useState({
        text: '',
        userId: ''
    });
    useEffect(() => {
        if (session && session.activeUser) {
            setForm({...form, userId: session.activeUser.id})
        }

    }, []);


    const submit = (e: any) => {
        e.preventDefault()
        if (form.text) {
            addMessage({variables: form},).then(res => {
                setForm({...form, text: ''})
            }).catch(err => console.log(err))
        }

    }
    return (
        <>
            <div className="description">
                <p className="sub_header__desc">simple chat app with <span>react</span>.</p>
            </div>

            <div>
                <form onSubmit={submit}>
                    <input className="add-snap__input"
                           type="text"
                           disabled={!(session && session.activeUser) || loading}
                           placeholder={session && session.activeUser ? 'Type message' : 'Please login to type'}
                           onChange={(e) => setForm({...form, text: e.target.value})}
                           value={form.text}
                    />
                    {error && <p>{error.message}</p>}
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