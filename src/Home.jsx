import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Delete } from './Reducer'


function Home() {
         
    const users = useSelector(state => state.users)
    const {student,setStudent}= useState([])
    const [inp,setInput]= useState('')

   const dispatch = useDispatch()

   const Delet = (e)=>{
    dispatch(Delete({id:e}))
   }
   const  st = users.filter((item)=>
    item.name.toLowerCase().includes(inp.toLowerCase())
)
  return (
    <div className='container'>
        



        <div className="row   mt-md-5">
  <div className="col-md-5 ">
    <div className="input-group ">
      <input className="form-control border-end-0 border" onChange={(e)=>setInput(e.target.value)} type="search"  placeholder='search' id="example-search-input" />
      <span className="input-group-append">
        <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
          <i className="fa fa-search" />
        </button>
      </span>
      
    </div>
    
  </div>
  
</div>

<div>
<Link className='btn btn-danger   float-end' to={"/add"}> + Add New Data</Link>

</div>

 
      <table className='table'>
        <thead>
            <tr>
                <th>id:</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody> 
            {
               users && st.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td >

                            <Link className=' btn btn-primary m-2 ' to={"/View/"+ user.id}>View</Link>
                            <Link className=' btn btn-primary   ' to={"/Edit/" + user.id}>Edit</Link>
                            <button className=' btn btn-danger m-2' onClick={()=>Delet(user.id)} >Delete</button>
                        </td>
                    </tr>
                )) 
            }
        </tbody>
      </table>
    </div>
  )
}

export default Home
