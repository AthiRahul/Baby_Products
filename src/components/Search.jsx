import React, { useContext } from 'react'
import { myContext } from '../Context/Context'

function Search() {
  const{isSearch}=useContext(myContext)
  return (
    
       <div className="">
            
            <div className=' max-h-96 mx-auto grid grid-cols-4 gap-3'>
            {isSearch && isSearch.map((value) => {
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

export default Search
