import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';


function ProductEdit() {

  const {id}=useParams()
  
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const countRef = useRef();
  const CategoryRef=useRef();
  const discriptnRef=useRef();
  const [productData,setProductdata]=useState()


  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
        .then((res) => { setProductdata(res.data) })
       
}, [])
  

    
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
        axios.patch(`http://localhost:3000/products/${id}`)

  }
  return (
    <div>
    <h1>hello</h1>
       <div className=' flex flex-col items-start ' >
                
                <div className='border p-4 flex flex-col items-center  w-96'>
                    <h1 >Edit</h1>
                    <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>

                        <label className="label-text"> Product Name</label>
                        <input type="text" placeholder="First and last name"
                            className="input input-bordered w-full max-w-xs" value={id.Name}
                            ref={nameRef}
                        />
                        <label className="label-text"> Product Price</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs" value={id.price}
                            ref={priceRef}
                        />
                        <label className="label-text"> Product Category</label>
                        <input type="text" placeholder="At least 6 character"
                            className="input input-bordered w-full max-w-xs" value={id.Category}
                            ref={CategoryRef}
                        />
                        <label className="label-text"> Image</label>
                        <img src='id.image' alt='productimage'/>
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
                            className="input input-bordered w-full max-w-xs" value={id.discriptn}
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

export default ProductEdit
