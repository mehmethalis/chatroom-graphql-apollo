import {gql} from '@apollo/client';

//user mutations
export const CREATE_USER = gql`
    mutation($userName:String! $password:String!) {
        createUser(data: { userName: $userName, password: $password }) {
            token
        }
    }
`
export const SIGN_IN_USER = gql`
    mutation($userName: String!, $password: String!) {
        signIn(data: { userName: $userName, password: $password }) {
            token
        }
    }
`

export const GET_ACTIVE_USER = gql`
    query {
        activeUser{
            userName
            createdAt
            messages{
                text
                createdAt
            }
        }
    }
`
