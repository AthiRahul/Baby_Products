import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../../Pages/Login';


function ProductDelete() {
    const imageRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const countRef = useRef();
    const CategoryRef = useRef();
    const discriptnRef = useRef();

    const [data, setData] = useState();
    const [ProductData, setProductdata] = useState({});
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => { setData(res.data) })

    }, [])

    const HandleDelete = (productId) => {

        axios.delete(`http://localhost:3000/products/${productId}`)
            .then((res) => alert("item deleted"))

    }
    const HandleEdit = (productId) => {
        axios.get(`http://localhost:3000/products/${productId}`)
            .then((res) => { setProductdata(res.data) })
        console.log(ProductData);
    }

   

    const buttonClick = () => {
        (e) => e.preventDefault()
        const image = imageRef.current.value
        const Name = nameRef.current.value
        const price = priceRef.current.value
        const Qty = countRef.current.value
        const Category = CategoryRef.current.value
        const discriptn = discriptnRef.current.value
       console.log(ProductData);
        
        axios.patch(`http://localhost:3000/products/${ProductData.id}`,{...ProductData,image,Name,price,Qty,discriptn,Category})
        .then((res)=>)
    }
return (
    <div className='flex'>
        <div>
            {data && data.map((item, i) => {

                return (
                    <div key={i} className="card card-side max-w-lg gap-4 bg-base-100 shadow-xl">
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
        {
            ProductData &&
                (ProductData) ?
                <div className=' flex flex-col items-start ' >

                    <div className='border p-4 flex flex-col items-center  w-96'>
                        <h1 >Edit</h1>
                        <form className="form-control w-full max-w-xs" onSubmit={buttonClick}>

                            <label className="label-text"> Product Name</label>
                            <input type="text" placeholder="First and last name"
                                className="input input-bordered w-full max-w-xs" defaultValue={ProductData.Name}

                                ref={nameRef}
                            />
                            <label className="label-text"> Product Price</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs" defaultValue={ProductData.price}
                                ref={priceRef}
                            />
                            <label className="label-text"> Product Category</label>
                            <input type="text" placeholder="At least 6 character"
                                className="input input-bordered w-full max-w-xs" defaultValue={ProductData.Category}
                                ref={CategoryRef}
                            />
                            <label className="label-text"> Image</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs"
                                defaultValue={ProductData.image}
                                ref={imageRef}
                               

                            />
                            <label className="label-text"> Qty</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs" defaultValue={ProductData.Qty}
                                ref={countRef}

                            />
                            <label className="label-text"> discriptn</label>
                            <input type="text"
                                className="input input-bordered w-full max-w-xs" defaultValue={ProductData.discriptn}
                                ref={discriptnRef}

                            /><br></br><br></br>

                            <button className="input-bordered w-full max-w-xs btn btn-warning"
                                type='submit'>Update Product</button>

                        </form>
                    </div>

                </div>
                : null}
    </div>
)
}

export default ProductDelete
