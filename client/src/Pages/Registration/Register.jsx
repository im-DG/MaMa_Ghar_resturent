import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layouts/Layout'
import { useAuth } from '../../store/auth'
import { toast } from 'react-toastify'
const Register = () => {
    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth()


    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",

    })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(user);
        try {
            const response = await fetch(`http://localhost:2024/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(user)
            })

            const res_data = await response.json()
            console.log("res from data", res_data.msg);
            if (response.ok) {

                //for tokens
                toast.success("Register successfull")
                storeTokenInLS(res_data.token)
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                })
                navigate('/login')
            }
            else {
                toast.error(res_data.msg)
            }

        } catch (error) {
            console.log("register", error);
        }
    }
    const handleKeyPress = (e) => {
        if (e.onKeyDown === 'Enter') {
            handleSubmit()
        }
    }
    return (
        <Layout>
            <div className='bg-[#11174A] min-h-full w-full'>
                <div className='flex justify-center align-middle rounded-md min-h-full'>
                    <div className=" flex justify-center min-h-[40rem] w-[80%] rounded-md">
                        <div className="w-[100%] sm:w-[80%] md:w-[50%] h-[80%] m-auto flex flex-col justify-center align-middle hover:scale-[103%] duration-700 hover:shadow-xl hover:shadow-[#797A7E]">
                            <div className=" rounded-t-lg bg-green-50 pt-5">

                                <h1 className="text-center font-bold text-xl md:text-3xl font-serif">Registration Form</h1>
                                <hr className='border-[0.12rem] border-black w-[30%] m-auto mt-2' />
                            </div>
                            <form onSubmit={handleSubmit} className='rounded-b-lg pt-7 px-5 bg-green-50 flex flex-col justify-center h-[100%]' action="">
                                <div className=" flex justify-center flex-col m-2">
                                    <label className='capitalize font-bold font-serif my-1' htmlFor="username">username :</label>
                                    <input type="text"
                                        className="w-[100%] sm:w-[80%] md:w-[60%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name='username'
                                        value={user.username}
                                        onChange={handleInput}
                                        onKeyDown={handleKeyPress}
                                        placeholder='Enter username'
                                        id='username'
                                    />
                                </div>
                                <div className="flex justify-center flex-col m-2">
                                    <label className='capitalize font-bold font-serif my-1' htmlFor="email">email :</label>
                                    <input type="email"
                                        className="w-[100%] sm:w-[80%] md:w-[60%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name='email'
                                        value={user.email}
                                        onChange={handleInput}
                                        onKeyDown={handleKeyPress}
                                        placeholder='Enter email'
                                        id='email'
                                    />
                                </div>
                                <div className="flex justify-center flex-col m-2">
                                    <label className='capitalize font-bold font-serif my-1' htmlFor="phone">phone :</label>
                                    <input type="number"
                                        className='w-[100%] sm:w-[80%] md:w-[60%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200'
                                        name='phone'
                                        value={user.phone}
                                        onChange={handleInput}
                                        onKeyDown={handleKeyPress}
                                        placeholder='Enter phone number'
                                        id='phone'
                                    />
                                </div>
                                <div className="flex justify-center flex-col m-2">
                                    <label className='capitalize font-bold font-serif my-1' htmlFor="password">password :</label>
                                    <input type="password"
                                        className="w-[100%] sm:w-[80%] md:w-[60%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name='password'
                                        value={user.password}
                                        onChange={handleInput}
                                        onKeyDown={handleKeyPress}
                                        placeholder='Enter password'
                                        id='password'
                                    />
                                </div>
                                <button className="my-3 text-xl font-bold bg-[#1F2455] text-white hover:bg-[#383C61] w-[100%] sm:w-[70%] md:w-[45%] h-9 rounded-lg mx-auto" type='submit'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register
