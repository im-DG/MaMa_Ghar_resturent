import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
    return (
        <section className='max-h-full flex justify-center w-[100%] bg-blue-950 p-7'>
            <div className="h-[45rem]">
                <div className='text-center text-[7rem] sm:text-[10rem] md:text-[14rem] font-bold animate-bounce flex justify-center'>
                    <span className='text-red-700'>4</span>
                    <div className='text-gray-600 animate-spin mx-8'>0</div>
                    <span className='text-green-700'>4</span></div>
                <h3 className='text-center text-xl sm:text-3xl md:text-5xl font-bold font-serif text-gray-300'>Page! not found.</h3>
                <p className="text-center text-sm md:text-xl my-5 text-cyan-400">Oops! It seems like you are trying to access page doesn't exist.
                    If you want to report please free to contact us. </p>
                <div className="text-center">
                    <NavLink className="bg-green-200 text-md font-bold mx-4 rounded-[0.25rem] p-1 hover:bg-green-500" to="/"> Return home</NavLink>
                    <NavLink className="bg-green-200 text-md font-bold mx-4 rounded-[0.25rem] p-1 hover:bg-green-500" to="/contact">Report</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Error
