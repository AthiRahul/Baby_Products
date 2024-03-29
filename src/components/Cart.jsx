import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header'
import axios from 'axios';

function Cart() {

  const [data, setData] = useState([])
  const [userdata, setUserdata] = useState()
  //const [count, setCount] = useState(1);
  const [downcount, setDowncount] = useState(0)
  const { userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${localStorage.getItem("user.id")}`)
      .then((res) => {
        setData(res.data)
        setUserdata(res.data.cart)
      })
  }, [])
 
  
  
  const HandleRemoveCart = async (productId) => {
    const newCart = userdata.filter((item) => item.id !== productId)
    await axios.patch(`http://localhost:3000/user/${data.id}`, { ...data, cart: newCart })
   
      .then(() => alert("remove from cart"))
      window.location = "/Cart"
  }
  
let total_price = userdata && userdata.reduce((a,e) => {return ((e.price.slice(1,-2)*(e.count))+ a)},0)
let count = userdata && userdata.reduce((a,e) =>{ return (e.count)*1+ a},0)

  return (
    <div >
      <Header /><br></br>
      <div>
      <div  className='max-h-96 mx-auto grid grid-cols-2 gap-3'>
        {userdata && userdata.map((value) => {
          return (
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
              <figure><img src={value.image} alt="product" /></figure>
              <div className="card-body">
                <p className="card-title">{value.Name}</p>
                <p className="card-title">${((value.price).slice(1,-2))*value.count}/-</p>
                <div className=" card-actions justify-start">
                   
                   <label>Qty:{value.count}</label>
                    
                  
                </div>

                <button onClick={() => HandleRemoveCart(value.id)} className="btn btn-warning">Remove cart</button>
                 
              </div>
            </div>)
        })}
      
      <div className="card card-centre bg-pink-200 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">price details</h2>
    
   
    <p>Total Price : {total_price}</p>
    <p>Total Qty : {count}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">place Order</button>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}


export default Cart
