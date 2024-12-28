import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

function View() {

    const user = useSelector(state => state.users)
    const {someID} = useParams()
    const DatajsxShow = user.find((e)=>{ return (e.id == someID)})

  return (
    <div className='container text-center'>

       <div className='my-5'>
       <h2>View User Details</h2>
      <h4>Id: {someID}  </h4>
      <h4>NAME: {DatajsxShow.name}</h4>
      <h4>Email: {DatajsxShow.email}</h4>
       </div>

        <Link className='btn btn-primary' to={"/"}>GO Back </Link>
    </div>
  )
}

export default View
