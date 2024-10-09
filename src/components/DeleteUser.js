import React ,{useState} from 'react'

import { useMutation } from '@apollo/client'

import { DELETE_USER } from '../graphql/mutation'



function DeleteUser() {
    const [id , setId] = useState("")

    const [deleteUser,{loading , data ,error}] = useMutation(DELETE_USER, {
        variables: {
            id:id
        }
    })

    console.log({loading , data ,error})
  return (
    <div>
        <input value={id} type='text' onChange={e => setId(e.target.value)} />
        <button onClick={deleteUser} >click</button>
    </div>
  )
}

export default DeleteUser