import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { myContext } from '../Context/Context'
import axios from 'axios';

function Category() {
  const [data, setData] = useState()
  const { category } = useContext(myContext)
  console.log(category, "kkjjhj");
  useEffect(() => {
    axios.get('http://localhost:3000/products')
        .then((res) => { setData(res.data) })
        
}, [])
//   console.log(data);
// const newData=data?.map((item)=>{
//   if(item.Category==category)
// console.log(newData);})
  return (
    
    <div>
    <h1 className='text-3xl text-center p-4'>Category</h1><br></br>
    <Header/>
      <div className="">

        <div className=' max-h-96 mx-auto grid grid-cols-4 gap-3'>
          {data && data.map((value) => {
            if(value.Category==category){
              return (
              <div className="card card-normal  bg-base-100 shadow-xl ">
                <img className='max-h-60 mx-auto' src={value.image} alt="product" />
                <div className="card-body">
                  <p className="card-title">{value.Name}</p>
                  <h1 className='text-2xl'>MRP{value.price}</h1>
                  <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/Discription/${value.id}`)} className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Category
