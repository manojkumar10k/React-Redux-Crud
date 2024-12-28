import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './Reducer'

let id = 3

function Adduser() {

    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const users = useSelector((state) => state.users)
   const nav = useNavigate()

      const dispatch = useDispatch()
      const handel =(e) =>{
          e.preventDefault()
           dispatch( addUser({id:id++,name:name,email:email}))
           nav("/")
      }

  return (

    <div className='container p-5'>

<form style={{width: '22rem'}}  onSubmit={handel}>
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form5Example1">Name</label>
  <input type="text" id="form5Example1" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
  </div>
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form5Example2">Email address</label>
    <input type="email" id="form5Example2" className="form-control" value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
  </div>

<div className='    d-flex gap-5'>
<Link to={"/"}  data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">GO Back</Link>

<button data-mdb-ripple-init type="submit" className="btn    btn-danger btn-block mb-4">Update</button>
</div>
</form>

    </div>
  )
}

export default Adduser;
