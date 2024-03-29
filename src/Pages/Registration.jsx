import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

import axios from 'axios';

function Registration() {
  const navigate = useNavigate()
  const nameRef = useRef();
  const mobRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const[wrongPw,setWrongPw]=useState()
  

  const [input, setInput] = useState({ user: '', email: '', password: '', repassword: '',cart:[] })

  const buttonClick = () => {
    const userInputData = {
      user: nameRef.current.value,
      email: mobRef.current.value,
      password: passwordRef.current.value,
      repassword: repasswordRef.current.value,
      cart:[],
      active:True
    }
    
    axios.post('http://localhost:3000/user',(userInputData))
    .then(res=>alert('regitration success'))
    if (userInputData.password === userInputData.repassword) {
      setInput(userInputData)
      
      navigate('/Login')
    } else {
      x=false
      setWrongPw('Password missmatch')
    }}

    
    return (
      <div className=' flex flex-col items-center' >
        <img className=" w-24 rounded-md" src='https://kotametro.waroengkiranatoysrent.com/pemanis_tampilan/img/2f3a974d7e8806f16829ff78663f8948.jpg' alt='logo' /><br></br>
        <div className='border p-4 flex flex-col items-center'>
          <h1 >Create Acount</h1>
          <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>

            <label className="label-text"> Your name</label>
            <input type="text" placeholder="First and last name"
              className="input input-bordered w-full max-w-xs"
              ref={nameRef}
            />
            <label className="label-text"> Mobile No or Email</label>
            <input type="text"
              className="input input-bordered w-full max-w-xs"
              ref={mobRef}
            />
            <label className="label-text"> PassWord</label>
            <input type="text" placeholder="At least 6 character"
              className="input input-bordered w-full max-w-xs"
              ref={passwordRef}
            />
            <label className="label-text"> Re-Enter PassWord</label>
            <input type="text"
              className="input input-bordered w-full max-w-xs"
              ref={repasswordRef}

            />
            <span>{wrongPw}</span><br></br>
            <button className="input-bordered w-full max-w-xs btn btn-warning"
              onClick={buttonClick}>Continue</button>

          </form>
        </div>

      </div>
    )
  
}

export default Registration
