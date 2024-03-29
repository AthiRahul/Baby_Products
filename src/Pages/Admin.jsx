import React from 'react'
import ProductAdd from '../components/admincomponents/ProductAdd'
import ProductDelete from '../components/admincomponents/ProductDelete'
import ProductEdit from '../components/admincomponents/ProductEdit'
import Users from '../components/admincomponents/Users'

function Admin() {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Products" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

  <ProductDelete/>
  
  
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="AddProduct" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><ProductAdd/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="User" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Users/></div>
</div>
    </div>
  )
}

export default Admin
