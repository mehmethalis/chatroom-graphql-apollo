import {gql} from '@apollo/client';

//user mutations
export const CREATE_USER = gql`
    mutation($userName:String! $password:String!) {
        createUser(data: { userName: $userName, password: $password }) {
            token
        }
    }
`