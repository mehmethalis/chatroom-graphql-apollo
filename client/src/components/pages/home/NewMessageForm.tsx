import React, {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_MESSAGE, GET_MESSAGES} from "../../../queries";

const NewMessageForm = ({session}: any) => {
    const [addMessage, {loading: mutationLoading, error: mutationError}] =
        useMutation(ADD_MESSAGE, {refetchQueries: [{query: GET_MESSAGES}]});

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
        <div>
            <form onSubmit={submit}>
                <input className="add-snap__input"
                       type="text"
                       disabled={!(session && session.activeUser) || mutationLoading}
                       placeholder={session && session.activeUser ? 'Type message' : 'Please login to type'}
                       onChange={(e) => setForm({...form, text: e.target.value})}
                       value={form.text}
                />
                {mutationError && <p>{mutationError.message}</p>}
            </form>
        </div>
    )
}
export default NewMessageForm;