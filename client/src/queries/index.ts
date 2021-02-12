import {gql} from '@apollo/client';

//user mutations
export const CREATE_USER = gql`
    mutation($userName:String! $password:String!) {
        createUser(data: { userName: $userName, password: $password }) {
            token
        }
    }
`

export const ADD_MESSAGE = gql`
    mutation($text:String! $userId:ID!) {
        createMessage(
            data: { text: $text, userId: $userId }
        ) {
            text
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
            id
            userName
            createdAt
            messages{
                text
                createdAt
            }
        }
    }
`
//Home
export const GET_MESSAGES = gql`
    query {
        messages {
            text
            id
            createdAt
            user {
                id
                userName
            }
        }
    }
`
