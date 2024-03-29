/*<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                </div>
            </div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={()=>navigate('/Login')}>
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://imgs.search.brave.com/NNqmLl--yA-qoIMCty9nsvqWhEA4yWud-oEGnbBAwbg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzAzLzQ0LzUz/LzM2MF9GXzUwMzQ0/NTM4N19DbVNtZXB3/MmFXZlZjbFZEVGNK/SHFMNjYyZUF3d1Rh/by5qcGc" />
                </div>
            import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Admin() {

  const {id}=useParams()
  
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const countRef = useRef();
  const CategoryRef=useRef();
  const discriptnRef=useRef();
  const [productData,setProductdata]=useState()


  const [data, setData] = useState();
    
    const navigate=useNavigate()
    

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => { setData(res.data) })
           
    }, [])
    
    const HandleDelete=(productId)=>{
       
            axios.delete(`http://localhost:3000/products/${productId}`)
            .then((res)=>alert("item deleted"))
    }
    const HandleEdit=(productId)=>{
        axios.get(`http://localhost:3000/products/${productId}`)
        .then((res)=>{setProductdata(res.data)})
    }
    
    
    const [input, setInput] = useState({ image: '', Name: '', price: '', Qty: '',discriptn:'',Category:''})

    const buttonClick = () => {
        const userInputData = {
            image: imageRef.current.value,
            Name: nameRef.current.value,
            price: priceRef.current.value,
            Qty: countRef.current.value,
            Category: CategoryRef.current.value,
            discriptn: discriptnRef.current.value


        }
        axios.patch(`http://localhost:3000/products/${productId}`)

  }
  return (
    <div>
    {data&&data.map((item)=>{

return(
 <div className="card card-side max-w-lg gap-4 bg-base-100 shadow-xl">
     <figure><img img className='max-h-60 mx-auto' src={item.image} alt="product" /></figure>
     <div className="card-body">
         <h2 className="card-title">{item.Name}</h2>
         <p>{item.price}</p>
         <div className="card-actions justify-end">
             <button onClick={()=>HandleEdit(item.id)}className="btn btn-primary">Edit</button>
             <button onClick={()=>HandleDelete(item.id)}className="btn btn-primary">Delete</button>
         </div>
     </div>
 </div>

)})}
    <h1>hello</h1>
       <div className=' flex flex-col items-start ' >
                
                <div className='border p-4 flex flex-col items-center  w-96'>
                    <h1 >Edit</h1>
                    <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>

                        <label className="label-text"> Product Name</label>
                        <input type="text" placeholder="First and last name"
                            className="input input-bordered w-full max-w-xs" value={productData.Name}
                            ref={nameRef}
                        />
                        <label className="label-text"> Product Price</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs" value={productData.price}
                            ref={priceRef}
                        />
                        <label className="label-text"> Product Category</label>
                        <input type="text" placeholder="At least 6 character"
                            className="input input-bordered w-full max-w-xs" value={productData.Category}
                            ref={CategoryRef}
                        />
                        <label className="label-text"> Image</label>
                        <img src='productData.image' alt='productimage'/>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            ref={imageRef}

                        />
                         <label className="label-text"> Qty</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs" value={id.Qty}
                            ref={countRef}

                        />
                         <label className="label-text"> discriptn</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs" value={productData.discriptn}
                            ref={discriptnRef}

                        /><br></br><br></br>
                        
                        <button className="input-bordered w-full max-w-xs btn btn-warning"
                            onClick={buttonClick}>Update Product</button>

                    </form>
                </div>

            </div>
    </div>
  )
}

export default Admin*/




