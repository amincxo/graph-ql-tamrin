import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_USERS } from '../graphql/queries';


function Users() {
    const {loading , data , error } = useQuery(GET_USERS);
    console.log(data)
    if (loading) {
        return <h3>loading ... </h3>
    }
    if (error) return <h3>some thing wrong</h3>
  return (
    <div>
        {data.users.data.map((user) => (
        <div  key={user.id} style={{background:"red" , margin:"15px"}} > 
          <h1> {user.name} </h1>  
          <p> {user.email} </p>  
          <p> {user.phone} </p>  
        </div>
        ))}
    </div>
  )
}

export default Users