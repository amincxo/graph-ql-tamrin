import { gql } from "@apollo/client";

const GET_USER = gql`
    query getUser($id: ID!) {
        user(id:$id){
            id
            name
            email
            phone
        }
    }
`;


const GET_USERS = gql`
query {
    users {
        data {
            id
            name
            email
            phone
        }
    }
}
`

export {GET_USER , GET_USERS}