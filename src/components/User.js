import React , {useState} from 'react'


import { gql , useQuery } from '@apollo/client';

const GET_USER = gql`
    query getUser($id: ID!) {
        user(id:$id){
            id
            name
            email
            phone
        }
    }
`

function User() {
    const [id , setId] = useState(2);

    const changeHandler = (event) => {
        setId(event.target.value)
    }
    const {loading , data , error} = useQuery(GET_USER, {
        variables: {id: id}
    });

    console.log({loading , data, error})


  return (

    <div>
        <input value={id} onChange={changeHandler} placeholder='enter id' />
    </div>
  )
}

export default User