import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'



function Discription() {
  const [data, setData] = useState([])

  const [userdata, setUserdata] = useState([])
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState()
  const { userId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${userId}`)
      .then((res) => { setData(res.data) })

  }, [])


  // Fetch user data
  
    axios.get(`http://localhost:3000/user/${localStorage.getItem("user.id")}`)
    .then((res) => {
      setUserdata(res.data);
      setCart(userdata.cart);
    })
  



  const HandleClick = () => {
    const product = data
    const existing = cart && cart.some((item) => item.id == product.id)
    if (existing) {
      alert("already added")
    }

    else {
      
      const updatedCart = [...cart, { ...product,count:count}]

      axios.patch(`http://localhost:3000/user/${userdata.id}`, { ...userdata, cart: updatedCart })
        .then(() => {
          alert("Item added to cart successfully");
        })
        .catch((error) => {
          console.error("Error updating user's cart:", error);
          alert("Failed to update user's cart. Please try again later.");
        })
    }
   
  }

  
  
    const HandleQuantity = (e) => {
    
      const selectedQuntity= e.target.value
      setCount(selectedQuntity)
     
    }
  
  
  


  return (
    <div>
      <Header /><br></br>
      <div className='md:flex gap-4'>

        <div className="card card-compact w-32 bg-base-100 shadow-xl flex-auto ">
          <figure><img src={data.image} alt="product" /></figure>
          <div className="card-body">
            <p className="card-title">{data.Name}</p>
            <p>MRP{data.price}</p>
            <label>Qty:</label> 
                    <select  id='Qty' onChange={HandleQuantity} value={count}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>

          </div>
        </div>
        <div className='flex-auto w-96'>
          <h1 className='text-3xl text-center'>Product Discription</h1><br></br>
          <div className='p-4'>{data.discriptn}</div><br></br>
             
         

          <div className="card-actions justify-end">
            {localStorage.getItem("user.id") ? <button onClick={HandleClick} className="btn btn-warning">Add to cart</button> : <button onClick={() => { alert("please log in") }} className="btn btn-warning">Add to cart</button>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Discription
