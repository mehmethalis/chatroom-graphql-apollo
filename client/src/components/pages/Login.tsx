import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {withRouter} from "react-router-dom";
import {SIGN_IN_USER} from "../../queries";
import ClipLoader from "react-spinners/ClipLoader";

const Login = (props:any) => {
    const [form, setForm] = useState({
        userName: '',
        password: ''
    });
    const [signIn, {loading: mutationLoading, error: mutationError}] = useMutation(SIGN_IN_USER);
    const formValidate = () => {
        const {userName, password} = form;
        return !userName || !password
    }

    const submit = (e: any) => {
        e.preventDefault();
        signIn({variables: form}).then( async ({data}) => {
            localStorage.setItem('token', data.signIn.token)
            await props.refetch()
            setForm({userName: "", password: ""})
            props.history.push('/')
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <form className="user-form" onSubmit={submit}>
                <label>
                    <input type="text" placeholder="username"
                           onChange={(e) => setForm({...form, userName: e.target.value})} value={form.userName}/>
                </label>
                <label>
                    <input type="password" placeholder="password"
                           onChange={(e) => setForm({...form, password: e.target.value})} value={form.password}/>
                </label>
                <label>
                    <button disabled={mutationLoading || formValidate()}>Login</button>
                </label>
            </form>
            {mutationLoading && <ClipLoader/>}
            {mutationError && <p> {mutationError.message} </p>}
        </div>
    )
}

export default withRouter(Login);