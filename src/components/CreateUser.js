import React , {useState} from 'react'

import { gql , useMutation } from '@apollo/client'

const CREATE_USER = gql`
mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
) {
    createUser(
    input: {
        name: $name,
        username: $username,
        email: $email,
        phone: $phone,
    })
    {
        id
        name
        username
        email
        phone
        
    }
}
`;

function CreateUser() {

    const [name , setName] = useState("");
    const [username , setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [createUser , {loading , data ,error , called}] = useMutation(CREATE_USER,{
        variables:{
            name: name,
            username:username,
            email: email,
            phone: phone
        },
    })
    console.log({loading , data, error ,called})
  return (
    <div>
        <div>
            <input type='text' value={name} placeholder='name' onChange={e => setName(e.target.value)}/>
            <input type='text' value={username} placeholder='username' onChange={e => setUserName(e.target.value)}/>
            <input type='text' value={email} placeholder='email' onChange={e => setEmail(e.target.value)}/>
            <input type='text' value={phone} placeholder='phone' onChange={e => setPhone(e.target.value)}/>
            <button onClick={()=> createUser()}>click</button>
        </div>
        <div>
            {loading && <h2>در حال ارسال دیتا</h2>}
            {data && (
                <>
                <h2>{data.createUser.id}</h2>
                <h2>{data.createUser.name}</h2>
                <h2>{data.createUser.email}</h2>
                <h2>{data.createUser.phone}</h2>
                <h2>{data.createUser.username}</h2>
            </>
            )
            }
        </div>
    </div>
  )
}

export default CreateUser