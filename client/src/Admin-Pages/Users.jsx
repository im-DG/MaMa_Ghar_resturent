import React from 'react'
import Navbar from '../Components/Admin-Navbar/Navbar'
import { useAuth } from '../store/auth'

const Users = () => {

    const { adminuser } = useAuth()

    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap bg-[#152247aa] w-full border border-red-500' >
                {adminuser.map((currElem, index) => {
                    const { username, email, phone } = currElem
                    return (
                        <div key={index} className='flex flex-col justify-center h-[20%] w-[20%] m-4 border border-gray-600 rounded-md'>
                            <h1 className='text-white p-2'>Username:{username} </h1>
                            <h1 className='text-white p-2'>Email: {email} </h1>
                            <h1 className='text-white p-2'>Phone: {phone} </h1>
                        </div>
                    )
                })}
            </div>
            <div className="bg-black text-center text-gray-500">
                &copy; All right reserved to Mama Ghar resturent.
            </div>
        </div >
    )
}

export default Users
