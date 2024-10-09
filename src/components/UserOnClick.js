import React , {useState} from 'react'


import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';



function UserOnClick() {
    const [id , setId] = useState(2);

    const changeHandler = (event) => {
        setId(event.target.value)
    }
    const [getUser , {loading , data , error ,called}] = useLazyQuery(GET_USER, {
        variables: {id: id}
    });

    console.log({loading,data,error ,called})


  return (

    <div>
        <input value={id} onChange={changeHandler} placeholder='enter id' />
        <button onClick={() => {getUser()}} > getUser </button>
        {loading && <h1>loading</h1>}
        {error && <h1>error</h1>}
        {
            data && (
                <>
                <h1> {data.user.name} </h1>  
                <p> {data.user.email} </p>  
                <p> {data.user.phone} </p> 
                </> 
            )
        }
        
    </div>
  )
}

export default UserOnClick