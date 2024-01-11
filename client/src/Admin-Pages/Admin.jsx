import React, { useEffect } from 'react'
import Navbar from '../Components/Admin-Navbar/Navbar'
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

    const { userlogin } = useAuth()
    const navigate = useNavigate()

    const filterAdmin = () => {
        {
            userlogin.isAdmin ? navigate('/admin') : navigate('/')
        }
    }
    useEffect(() => {
        filterAdmin()
    }, [])
    return (
        <div className='bg-[#070626aa] min-h-[100rem] w-full'>
            <Navbar />
            admin
        </div>
    )
}

export default Admin
