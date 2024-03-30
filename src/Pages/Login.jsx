import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((res) => { setData(res.data) })
  }, [])


  const mailRef = useRef();
  const PassWordRef = useRef();
  const [wrongEntry, setwrongEntry] = useState('')

  const clickToLogin = () => {
    const mailId = mailRef.current.value;
    const password = PassWordRef.current.value
      data && data.map((value) => {
      if("9995000213"===mailId && "5000"===password){
        localStorage.setItem("Admin.id", "1000")
        navigate('/AdminHome')
      }
      else if (value.email === mailId && value.password === password&&value.active==true) {
        localStorage.setItem("user.id", value.id)
        navigate('/')
      } else {
        setwrongEntry('user name and pasword not matching')
      }
    })


  }
  return (
    <div className='flex flex-col items-center bg-pink-100 h-screen pt-20'>
      <h1>Sign in</h1>
      <div className='border p-4 flex flex-col items-center'>
        <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
          <label className="label-text"> Mobile No or Email</label>
          <input type="text" className="input input-bordered w-full max-w-xs" ref={mailRef} />
          <label className="label-text"> PassWord</label>
          <input type="text" placeholder="At least 6 character"
            className="input input-bordered w-full max-w-xs"
            ref={PassWordRef} /><br></br>
          <br></br>
          <button className="input-bordered w-full max-w-xs btn btn-warning"
            onClick={clickToLogin} >Continue</button>
          <span>{wrongEntry}</span>
          <span className="label-text"> New to BabyBliss?</span>
          <button className="input-bordered w-full max-w-xs btn"
            onClick={() => navigate('/Registration')}>Create New  Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
