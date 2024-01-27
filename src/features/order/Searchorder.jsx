import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
function Searchorder() {
    const[query ,setQuery]= useState("");
    const navigate =useNavigate()
   function handlesubmit(e){
    e.preventDefault()
    if(!query) return
    navigate(`/order/${query}`)
    setQuery('')

   }
  return (
    <form onSubmit={handlesubmit}>
        <input  placeholder='Search order #' value={query} onChange={(e)=> setQuery(e.target.value)} />
    </form>
  )
}

export default Searchorder