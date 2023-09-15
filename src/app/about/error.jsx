'use client'
import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
    useEffect(()=>{
console.log(error);
    },[error])
  return (
    <div className='text-center mt-10'>
    <h1>something want wrong</h1>
    <button className='hover:text-amber-600' onClick={()=>reset()}>try again</button>
    </div>
  )
}

export default Error;