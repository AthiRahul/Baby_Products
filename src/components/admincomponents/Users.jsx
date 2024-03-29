import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    const [data, setData] = useState()
    const[Singleuser,setSingleuser]=useState()
    const HandleBlock=(userId)=>{
        axios.get(`http://localhost:3000/user/${userId}`)
        .then((res)=>setSingleuser(res.data))
        console.log(Singleuser);
        axios.patch(`http://localhost:3000/user/${userId}`,{...Singleuser,active:false})
    }
    const HandleUnblock=(userId)=>{
        axios.patch(`http://localhost:3000/user/${userId}`,{...Singleuser,active:true})
    }
    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((res) => { setData(res.data) })
    }, [data])
    return (
        <div>
            {data && data.map((item, i) => {

                return (
                    <div className="card w-full bg-pink-100  text-black">
                        <div className="card-body">
                            <h2 className="card-title ">Id:{item.id}</h2>
                            <p>Name:{item.user}</p>
                            <p>Email/Mobile No:{item.email}</p>
                            <p></p>
                            <div className="card-actions justify-end">
                               {item.active==true? <button onClick={()=>HandleBlock(item.id)} className="btn">block</button>
                               :<button onClick={()=>HandleUnblock(item.id)} className='btn'>Unblock</button>}
                               
                                
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users
