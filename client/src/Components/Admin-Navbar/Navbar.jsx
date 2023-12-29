import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
// import { useAuth } from '../../store/auth';






const Navbar = () => {

    // const { isLoggedIn } = useAuth()


    const [toggle, setToggle] = useState(false)


    return (
        <div className='sticky top-0 bg-blue-100 p-4 z-40'>

            <div className='flex justify-between items-center bg-gray-100 py-4 px-8 shadow-xl max-w-full mx-auto'>
                <div className=" w-[40%]">
                    <NavLink to="/admin"> <h1 className='w-[100%] tex-xl md:text-3xl font-bold text-gray-500 uppercase'>admin pannel</h1>
                    </NavLink>
                </div>
                {
                    toggle ?
                        <MdClose onClick={() => setToggle(!toggle)} className='text-xl md:hidden block' />
                        :
                        <MdMenu onClick={() => setToggle(!toggle)} className='text-xl md:hidden block' />
                }

                <ul className='md:flex hidden justify-between gap-7'>

                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/admin/users">Users</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/admin/addmenus">Add Menu</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/admin/reservations">Reservation</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/admin/contacts">Contact</NavLink>
                    </li>

                </ul>


                {/* Medium device Menu */}

                <ul className={`md:hidden fixed bg-blue-100 top-24 w-[50%] h-screen shadow-2xl
                ${toggle ? 'right-0 duration-500 z-50' : 'right-[-100%] duration-500'}`
                }>
                    <li>
                        <NavLink className="font-bold text-sm capitalize" to="/admin/users">users</NavLink>
                    </li>
                    <li>
                        <NavLink className="font-bold text-sm capitalize" to="/admin/addmenus">add Menu</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/admin/reservations">reservation</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/admin/contacts">Contact</NavLink>
                    </li>


                </ul>

            </div>


        </div >
    )
}

export default Navbar