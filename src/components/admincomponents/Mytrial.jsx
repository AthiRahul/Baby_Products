import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ProductDelete from '../components/admincomponents/ProductDelete'

function Mytrial() {
    const navigate = useNavigate()
    const imageRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const countRef = useRef();
    const CategoryRef = useRef();
    const discriptnRef = useRef();

    const [data, setData] = useState();
    const [productData, setProductdata] = useState();

    const [input, setInput] = useState({ image: '', Name: '', price: '', Qty: '', discriptn: '', Category: '' })
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => { setData(res.data) })
    }, [])
    
    const buttonClick = () => {
        const userInputData = {
            image: imageRef.current.value,
            Name: nameRef.current.value,
            price: priceRef.current.value,
            Qty: countRef.current.value,
            Category: CategoryRef.current.value,
            discriptn: discriptnRef.current.value
        }
        axios.post('http://localhost:3000/products', (userInputData))
            .then(res => alert('Added successfully'))
        const HandleDelete = (productId) => {
            axios.delete(`http://localhost:3000/products/${productId}`)
                .then((res) => alert("item deleted"))
        }
        const HandleEdit = (productId) => {
            axios.get(`http://localhost:3000/products/${productId}`)
                .then((res) => { setProductdata(res.data) })
        }
    }
    return (
        <div>
            <div className="navbar bg-pink-200">
                <div className="flex-1">
                    <img className=" w-24 rounded-md" src='https://kotametro.waroengkiranatoysrent.com/pemanis_tampilan/img/2f3a974d7e8806f16829ff78663f8948.jpg' alt='logo' />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className=' flex flex-col items-start ' >
                    <div className='border p-4 flex flex-col items-center  w-96'>
                        <h1 >Add Product</h1>
                        <form className="form-control w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
                            <label className="label-text"> Product Name</label>
                            <input type="text" placeholder="First and last name"
                                className="input input-bordered w-full max-w-xs"
                                ref={nameRef} />
                            <label className="label-text"> Product Price</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs"
                                ref={priceRef} />
                            <label className="label-text"> Product Category</label>
                            <input type="text" placeholder="At least 6 character"
                                className="input input-bordered w-full max-w-xs"
                                ref={CategoryRef} />
                            <label className="label-text"> Image</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs"
                                ref={imageRef} />
                            <label className="label-text"> Qty</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs"
                                ref={countRef} />
                            <label className="label-text"> discriptn</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs"
                                ref={discriptnRef}

                            /><br></br><br></br>

                            <button className="input-bordered w-full max-w-xs btn btn-warning"
                                onClick={buttonClick}>Add Product</button>

                        </form>
                    </div>



                    {
                        data && data.map((item) => {

                        return (
                            <div className="card card-side max-w-lg gap-4 bg-base-100 shadow-xl">
                                <figure><img img className='max-h-60 mx-auto' src={item.image} alt="product" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.Name}</h2>
                                    <p>{item.price}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => HandleEdit(item.id)} className="btn btn-primary">Edit</button>
                                        <button onClick={() => HandleDelete(item.id)} className="btn btn-primary">Delete</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>

        </div>
    )
}




export default Mytrial

