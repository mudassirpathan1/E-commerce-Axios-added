import React, { useRef } from 'react'

import './ContactUs.css'
const ContactUs = (props) => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const numberRef = useRef('')

    const submitHandler = (event)=>{
        event.preventDefault()
        const userDetails ={
            name :nameRef.current.value,
            email:emailRef.current.value,
            number:numberRef.current.value
        }
props.getUserDetails(userDetails)

    }
  return (
    <div className='form-box'>
      <h1>User Details</h1>  
      <form className="user-form" onSubmit={submitHandler}>
      
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameRef}/>
        <label htmlFor="email">Email ID</label>
        <input type="email" ref={emailRef}/>
        <label htmlFor="number">Phone Number</label>
        <input type="number" ref={numberRef}/>
        <button className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs;
