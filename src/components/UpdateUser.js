import React , {useState} from 'react'

import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../graphql/mutation';



function UpdateUser() {

    const [id , setId] = useState("");
    const [name , setName] = useState("");

    const [UpdateUser , {loading , data ,error , called}] = useMutation(UPDATE_USER,{
        variables:{
            id: id,
            name: name,
        },
    })
    console.log({loading , data, error ,called})
  return (
    <div>
        <div>
            <input type='text' value={id} placeholder='id' onChange={e => setId(e.target.value)}/>
            <input type='text' value={name} placeholder='name' onChange={e => setName(e.target.value)}/>
            <button onClick={()=> UpdateUser()}>click</button>
        </div>
        <div>
            {loading && <h2>در حال ارسال دیتا</h2>}
            {data && (
                <>
                <h2>{data.updateUser.id}</h2>
                <h2>{data.updateUser.name}</h2>
                <h2>{data.updateUser.email}</h2>
                <h2>{data.updateUser.phone}</h2>
                <h2>{data.updateUser.username}</h2>
            </>
            )
            }
        </div>
    </div>
  )
}

export default UpdateUser