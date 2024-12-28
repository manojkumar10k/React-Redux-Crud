import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Editpage } from './Reducer'

function Edit() {

   
     const users = useSelector(state => state.users)
    const {someID} = useParams()
    const DatajsxShow = users.find((e)=>{ return e.id == someID})
  const nav =  useNavigate()


    const [nam,setName] = useState(DatajsxShow.name)
    const [email,setEmail] = useState(DatajsxShow.email)

   const dispatch = useDispatch()
    const handel = (e)=>{
        e.preventDefault()
        dispatch(Editpage({id:someID,name:nam,email:email}))
        nav("/")
    } 
      
    
  return (

   

<div className=' container   p-5 '>
<form style={{width: '22rem'}}  onSubmit={handel}>
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form5Example1">Name</label>
  <input type="text" id="form5Example1" className="form-control" value={nam} onChange={(e)=>{setName(e.target.value)}} />
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
export default Edit
