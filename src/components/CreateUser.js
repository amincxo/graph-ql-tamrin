import React from 'react'

import { gql , useMutation } from '@apollo/client'

const CREATE_USER = gql`
mutation {
    createUser(
    input: {
        name: "amin"
        username: "amin"
        email: "amin@gmail.com"
        phone: "09351545157"
    })
    {
        id
        name
        email
        phone
        
    }
}
`;

function CreateUser() {
    const [createUser , {loding , data ,error , called}] = useMutation(CREATE_USER)
    console.log({loding , data, error ,called})
  return (
    <div>
        <button onClick={()=> createUser()}>click</button>
    </div>
  )
}

export default CreateUser