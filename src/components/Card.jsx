import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Card() {
    const navigate = useNavigate()
    const [data, setData] = useState();
    
    

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => { setData(res.data) })
    }, [])
   
       
    return (
        <div className="">
            
            <div className=' max-h-96 mx-auto grid grid-cols-4 gap-3'>
            {data && data.map((value) => {
                return (
                    <div className="card card-normal  bg-base-100 shadow-xl ">
                        <img className='max-h-60 mx-auto'  src={value.image} alt="product" />
                        <div className="card-body">
                            <p className="card-title">{value.Name}</p>
                            <h1 className='text-2xl'>MRP{value.price}</h1>
                            <div className="card-actions justify-end">
                                <button onClick={() => navigate(`/Discription/${value.id}`)} className="btn btn-warning">Buy Now</button>
                            </div>
                        </div>
                    </div>)
            })}
            </div>
        </div>
    )
}

export default Card
