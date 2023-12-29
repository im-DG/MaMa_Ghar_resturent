import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
    return (
        <div className=' font-serif pb-8 py-5 max-h-[30rem] w-full bg-blue-100 md:flex justify-between'>
            <div className="flex flex-col justify-center min-w-[70%]">
                <h2 className='text-center text-sm md:text-2xl my-2 border-solid'>Enjoy our Special Food</h2>
                <h1 className='text-center text-xl md:text-4xl my-2 sm:text-2.5xl'>Welcome to <span className='text-green-500 font-bold font-serif'>MaMa</span> <span className='font-bold text-blue-500 font-serif'>Ghar</span></h1>
                <p className='text-center md:text-2xl text-sm my-0.5'>We are here for your satisfaction &nbsp;
                    <Typed className='text-green-600'
                        strings={['Enjoy your Day .', 'Get better Food .', 'Live your life .']}
                        typeSpeed={70}
                        backSpeed={80}
                        loop
                    />
                </p>

            </div>

            <div className="flex justify-center align-middle first-letter max-h-[38vh] md:max-h-[100vh] min-w[100%] md:min-w-[30%] my-5">
                <img className='md:w-[80%] md:px-3 p-1 w-[40%] rounded-3xl' src="../public\photos\hero.jpg" alt="photo" />
            </div>
        </div>
    )
}

export default Banner
