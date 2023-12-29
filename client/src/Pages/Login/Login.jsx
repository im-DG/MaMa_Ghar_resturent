import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layouts/Layout'
import { useAuth } from '../../store/auth'
import { toast } from 'react-toastify';
const Login = () => {

    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth()
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:2024/api/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })


            const res_data = await response.json()
            console.log("res from data", res_data);
            // console.log(response);
            if (response.ok) {

                // for token
                storeTokenInLS(res_data.token)
                setUser({
                    email: "",
                    password: "",
                })
                navigate("/") //For home page redirect.
                toast.success('Login Successfull')
            }
            else {

                {
                    res_data.msg ? toast.error(res_data.msg) : toast.error("Incorrect Password or Email");
                }

            }

        } catch (error) {
            console.log("login error", error);
        }

    }
    const handleKeyPress = (e) => {
        if (e.onKeyDown === 'Enter') {
            handleSubmit()
        }
    }
    return (
        <Layout>
            <div className='bg-[#11174A] min-h-full w-full mb-0'>

                <div className='flex justify-center align-middle rounded-md min-h-full mb-0'>
                    <div className=" flex justify-center min-h-[40rem] w-[80%] rounded-md mb-0">
                        <div className="w-[100%] sm:w-[80%] md:w-[50%] h-[60%] rounded-md flex flex-col justify-center m-auto hover:scale-[103%] duration-700 hover:shadow-xl hover:shadow-[#797A7E]">
                            <div className=" rounded-t-lg bg-green-50 pt-5">

                                <h1 className="text-center font-bold text-xl md:text-3xl font-serif">Login Form</h1>
                                <hr className='border-[0.12rem] border-black w-[20%] m-auto mt-2' />
                            </div>
                            <form onSubmit={handleSubmit} className='rounded-b-lg pt-7 px-5 bg-green-50 flex flex-col justify-center h-[100%]' action="">
                                <div className=" flex justify-center flex-col m-2">
                                    <label className='capitalize font-bold font-serif my-1' htmlFor="email">email :</label>
                                    <input type="text"
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
                                <button className="my-3 text-xl font-bold bg-[#1F2455] text-white hover:bg-[#383C61] w-[100%] sm:w-[70%] md:w-[45%] h-9 rounded-lg mx-auto" type='submit'>Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login
