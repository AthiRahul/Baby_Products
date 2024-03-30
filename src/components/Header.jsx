import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../Context/Context'
function Header() {
  const { setIsSearch } = useContext(myContext)
  const { setCategory } = useContext(myContext)
  const [data, setData] = useState()
  const [cartlenth, setCartlenth] = useState([])
  const [userdata, setUserdata] = useState({})
  const [filtereddata, setFiltereddata] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:3000/user/${localStorage.getItem("user.id")}`)
      .then((res) => {
        setUserdata(res.data)
        setCartlenth(res.data.cart)
      })
  }, [])
  
  console.log(cartlenth);
  console.log(userdata);

  const HandleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => { setData(res.data) })
  }, [])

  const filterRef = useRef()

  const HandleFilter = () => {
    const searchData = filterRef.current.value
    let searcharray = []
    data && data.map(item => {
      if ((item.Name.toLowerCase()).includes(searchData.toLowerCase())) {
        searcharray.push(item)
      }
    })
    setIsSearch(searcharray)
    navigate('/Search')
  }
  return (
    <div>
      <div className="navbar bg-pink-300 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Shop'}>Shop</Link></li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li onClick={() => setCategory("Daiapering")}><Link to={'/Category'}>Daiapering</Link></li>
                  <li onClick={() => setCategory("Clothing")}><Link to={'/Category'}>Clothing</Link></li>
                  <li onClick={() => setCategory("Beddig")}><Link to={'/Category'}>Beddig</Link></li>
                  <li onClick={() => setCategory("Bathing")}><Link to={'/Category'}>Bathing</Link></li>
                </ul>
              </li>
              <li><Link to={'/AboutAs'}>AboutUs</Link></li>
              <li><Link to={'/ContactUs'}>ContactUs</Link></li>
              <li><Link to={'/Testinomial'}>testinomial</Link></li>
            </ul>
          </div>
          <img className="h-12 w-25 hidden md:block rounded-lg" src='https://kotametro.waroengkiranatoysrent.com/pemanis_tampilan/img/2f3a974d7e8806f16829ff78663f8948.jpg' alt='logo' />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Shop'}>Shop</Link></li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li ><Link to={'/Category'} onClick={() => setCategory("Daiapering")}>Daiapering</Link></li>
                  <li onClick={() => setCategory("Clothing")}><Link to={'/Category'}>Clothing</Link></li>
                  <li onClick={() => setCategory("Beddig")}><Link to={'/Category'}>Beddig</Link></li>
                  <li onClick={() => setCategory("Bathing")}><Link to={'/Category'}>Bathing</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to={'/AboutAs'}>AboutUs</Link></li>
            <li><Link to={'/ContactUs'}>ContactUs</Link></li>
            <li><Link to={'/Testinomial'}>Testinomial</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="SearchProducts...." ref={filterRef} />
            <svg onClick={HandleFilter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{cartlenth.length}</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{cartlenth.length}Items</span>

                  <div className="card-actions">
                    <button onClick={() => navigate('/cart')} className="btn btn-primary btn-block" >View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://imgs.search.brave.com/NNqmLl--yA-qoIMCty9nsvqWhEA4yWud-oEGnbBAwbg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzAzLzQ0LzUz/LzM2MF9GXzUwMzQ0/NTM4N19DbVNtZXB3/MmFXZlZjbFZEVGNK/SHFMNjYyZUF3d1Rh/by5qcGc" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                <li>
                  {userdata && userdata.user ?


                    <button onClick={HandleLogout}><span>{userdata.user}</span>Logout</button>
                    :
                    <button onClick={() => navigate('/login')}>Login</button>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header