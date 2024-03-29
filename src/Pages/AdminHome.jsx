
import { Route, Routes } from 'react-router-dom'

import ProductAdd from '../components/admincomponents/ProductAdd'
import ProductDelete from '../components/admincomponents/ProductDelete'
import ProductEdit from '../components/admincomponents/ProductEdit'
import Admin from './Admin'


function AdminHome() {
    return (
        <div>
        <Admin/>
            {localStorage.getItem("Admin.id") ?
                <Routes>
                    <Route path='Admin/ProductEdit' element={<Admin />}></Route>
                    
                </Routes>
                : null}

        </div>
    )
}

export default AdminHome
