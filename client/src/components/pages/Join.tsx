import React, {useState} from "react";
import {useMutation} from '@apollo/client';
import {CREATE_USER} from "../../queries";
import ClipLoader from "react-spinners/ClipLoader"


const Join = () => {
    const [form, setForm] = useState({
        userName: '',
        password: '',
        passwordConfirm: ''

    });
    const [createUser, {loading: mutationLoading, error: mutationError}] = useMutation(CREATE_USER);

    const formValidate = () => {
        const {userName, password, passwordConfirm} = form;
        return !userName || !password || !passwordConfirm || password!==passwordConfirm
    }

    const submit = (e: any) => {
        e.preventDefault();
        createUser({variables: {userName: form.userName, password: form.password}})
            .then(({data}) => {
                console.log(data)
                localStorage.setItem('token',data.createUser.token)
                setForm({
                    userName: '',
                    password: '',
                    passwordConfirm: ''

                })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

            <form className="user-form" onSubmit={submit}>
                <label>
                    <input type="text" name={'userName'} placeholder="username"
                           onChange={(e) => setForm({...form, userName: e.target.value})} value={form.userName}/>
                </label>
                <label>
                    <input type="password" name={'password'} placeholder="password"
                           onChange={(e) => setForm({...form, password: e.target.value})} value={form.password}/>
                </label>
                <label>
                    <input type="password" name={'passwordConfirm'} placeholder="confirm password"
                           onChange={(e) => setForm({...form, passwordConfirm: e.target.value})} value={form.passwordConfirm}/>
                </label>
                <label>
                    <button disabled={mutationLoading || formValidate()}>Join</button>
                </label>
            </form>
            {mutationLoading && <ClipLoader/>}
            {mutationError && <p> {mutationError.message} </p>}
        </div>
    )
}
export default Join;