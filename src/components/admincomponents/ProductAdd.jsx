import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductAdd() {
    const navigate = useNavigate()
    const imageRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const countRef = useRef();
    const CategoryRef=useRef();
    const discriptnRef=useRef();

    
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
        axios.post('http://localhost:3000/products',(userInputData))
    .then(res=>alert('Added successfully'))
    }
    return (
        <div>
            <div className=' flex flex-col items-start ' >
                
                <div className='border p-4 flex flex-col items-center  w-96'>
                    <h1 >Add Product</h1>
                    <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>

                        <label className="label-text"> Product Name</label>
                        <input type="text" placeholder="First and last name"
                            className="input input-bordered w-full max-w-xs"
                            ref={nameRef}
                        />
                        <label className="label-text"> Product Price</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            ref={priceRef}
                        />
                        <label className="label-text"> Product Category</label>
                        <input type="text" placeholder="At least 6 character"
                            className="input input-bordered w-full max-w-xs"
                            ref={CategoryRef}
                        />
                        <label className="label-text"> Image</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            ref={imageRef}

                        />
                         <label className="label-text"> Qty</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            ref={countRef}

                        />
                         <label className="label-text"> discriptn</label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            ref={discriptnRef}

                        /><br></br><br></br>
                        
                        <button className="input-bordered w-full max-w-xs btn btn-warning" 
                            onClick={buttonClick}>Add Product</button>
                      
                    </form>
                </div>

            </div>

        </div>
    )
}

export default ProductAdd
