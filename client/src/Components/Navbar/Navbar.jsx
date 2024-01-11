import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";
import { useAuth } from '../../store/auth';






const Navbar = () => {

    const { isLoggedIn } = useAuth()


    const [toggle, setToggle] = useState(false)


    return (
        <div className='sticky top-0 bg-blue-100 p-4 z-40'>

            <div className='flex justify-between items-center bg-gray-100 py-4 px-8 shadow-xl max-w-full mx-auto'>
                <div className="">
                    <NavLink to="/"><img className='w-12 h-12' src="../photos/logo.jpeg" alt="logo" />
                    </NavLink>
                </div>
                {
                    toggle ?
                        <MdClose onClick={() => setToggle(!toggle)} className='text-xl md:hidden block' />
                        :
                        <MdMenu onClick={() => setToggle(!toggle)} className='text-xl md:hidden block ' />
                }

                <ul className='md:flex hidden justify-between gap-7'>
                    <li className="">
                        <NavLink className='text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize' to="/" >Home</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/about">About Us</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/menu">Menu</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/reservation">Reserve now</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/contact">Contact</NavLink>
                    </li>


                    {/* ------- */}
                    {
                        isLoggedIn ?
                            <li className="">
                                <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/logout">logout</NavLink>
                            </li>
                            :
                            <>
                                <li className="">
                                    <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/register">Sign Up</NavLink>
                                </li>
                                <li className="">
                                    <NavLink className="text-md font-bold focus:text-green-700 hover:text-blue-700 capitalize" to="/login">Login</NavLink>
                                </li>
                            </>



                    }
                </ul>


                {/* Medium device Menu */}

                <ul className={`md:hidden fixed bg-blue-100 top-24 w-[50%] h-screen shadow-2xl
                ${toggle ? 'right-0 duration-500 z-50' : 'right-[-100%] duration-500'}`
                }>
                    <li className="my-5 mx-3">
                        <NavLink className='font-bold text-sm capitalize' to="/" >Home</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/about">About Us</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/menu"> Menu</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/reservation">reserve now</NavLink>
                    </li>
                    <li className="my-5 mx-3">
                        <NavLink className="font-bold text-sm capitalize" to="/contact">Contact</NavLink>
                    </li>


                    {/* ---------- */}
                    {
                        isLoggedIn ? (

                            <li className="my-5 mx-3">
                                <NavLink className="font-bold text-sm capitalize" to="/logout">logout</NavLink>
                            </li>
                        )
                            :
                            (
                                <>
                                    <li className="my-5 mx-3">
                                        <NavLink className="font-bold text-sm capitalize" to="/register">Sign Up</NavLink>
                                    </li>
                                    <li className="my-5 mx-3">
                                        <NavLink className="font-bold text-sm capitalize" to="/login">Login</NavLink>
                                    </li>
                                </>
                            )

                    }
                </ul>

            </div>


        </div>
    )
}

export default Navbar