import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Header from '../components/Header'

function Shop() {
    
    
   
  return (
    <div>
     
        <Header/>   
        <h1 className='text-3xl text-center p-4'>BabyBliss Shop</h1><br></br>
        <Card/>

  
  

    </div>
    
  )
}

export default Shop
