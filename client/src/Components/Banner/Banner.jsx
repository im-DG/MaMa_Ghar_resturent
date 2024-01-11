import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
    return (
        <div className=' font-serif min-h-[100vh] w-full flex justify-between animate-pulse '>
            <div className="flex flex-col justify-center md:min-w-[40%] min-w-[50%] bg-[#7d615c]">
                <h2 className='text-center text-sm md:text-2xl my-2 border-solid text-white'>Enjoy our Special Food</h2>
                <h1 className='text-center text-xl md:text-4xl my-2 sm:text-2.5xl text-white'>Welcome to <span className='text-green-500 font-bold font-serif'>MaMa</span> <span className='font-bold text-blue-500 font-serif'>Ghar</span></h1>
                <p className='text-center md:text-2xl text-sm my-0.5 text-white'>We are here for your satisfaction &nbsp;
                    <Typed className='text-green-600'
                        strings={['Enjoy your Day .', 'Get better Food .', 'Live your life .']}
                        typeSpeed={70}
                        backSpeed={80}
                        loop
                    />
                </p>

            </div>

            <div className="flex justify-center align-middle first-letter max-h-[100vh] md:min-w-[60%] min-w-[50%] bg-[url('../public/photos/momos.jpg')] bg-cover bg-center bg-no-repeat opacity-80 border-none">
            </div>
        </div>
    )
}

export default Banner
