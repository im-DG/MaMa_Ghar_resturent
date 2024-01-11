import React from 'react';
import Layout from '../../Components/Layouts/Layout';
import Banner from '../../Components/Banner/Banner';
import Typed from 'react-typed';
const Home = () => {
    return (
        <Layout>
            <Banner />
            <section className=" max-h[100vh] flex flex-col p-5 sm:p-10 bg-[#d3dfdfaa]">
                <div className="flex justify-between rounded-t-md p-3 bg-gradient-to-tr from-blue-200 to bg-red-300">
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className='text-[0.6rem] sm:text-xl md:text-3xl font-bold '>Get 100% Organic</h1>
                        <p className='text-[0.45rem] sm:text-md md:text-xl'>Special and Delicious</p>
                        <Typed className='text-green-600 text-[0.55rem] sm:text-xl md:text-2xl font-bold italic font-serif'
                            strings={['Mo:Mo .', 'Chaowmein .', 'Thukpa .', 'Soup .', 'Fried Rice .', 'Egg .', 'Pizza .']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop
                        />
                    </div>
                    <div className="w-[50%] flex justify-center items-center"><img src="../public/home-photos/1.jpeg" alt="menus" className='rounded-xl' width="400" /></div>
                </div>
                <div className="flex justify-between bg-gradient-to-tr p-3 from-green-200 to bg-blue-200">
                    <div className="w-[50%] flex justify-center items-center"><img src="../public/home-photos/2.jpeg" alt="menus" className='rounded-xl' width="400" /></div>
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className='text-[0.6rem] sm:text-xl md:text-3xl font-bold '>Get 100% Organic</h1>
                        <p className='text-[0.45rem] sm:text-md md:text-xl'>Special and Delicious</p>
                        <Typed className='text-green-600 text-[0.55rem] sm:text-xl md:text-2xl font-bold italic font-serif'
                            strings={['Burger .', 'Sandwich .', 'Kathi roll .', 'Pasta .', 'Stick Food .', 'Biryani .', 'Sizzler .']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop
                        /></div>
                </div>
                <div className="flex justify-between bg-gradient-to-br p-3 from-blue-200 to bg-pink-200">
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className='text-[0.6rem] sm:text-xl md:text-3xl font-bold '>Get 100% Organic</h1>
                        <p className='text-[0.45rem] sm:text-md md:text-xl'>Special and Delicious</p>
                        <Typed className='text-green-600 text-[0.55rem] sm:text-xl md:text-2xl font-bold italic font-serif'
                            strings={['Thakali Set.', 'Salad .', 'Tea/Coffee .', 'Lassi .', 'Sekuwa .', 'Matka tea .', 'Cold Drink .']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop
                        />
                    </div>
                    <div className="w-[50%] flex justify-center items-center"><img src="../public/home-photos/3.jpeg" alt="menus" className='rounded-xl' width="400" /></div>
                </div>
                <div className="flex justify-between rounded-b-md bg-gradient-to-tr p-3 from-blue-300 to bg-red-300">
                    <div className="w-[50%] flex justify-center items-centert"><img src="../public/home-photos/4.jpeg" alt="menus" className='rounded-xl' width="400" /></div>
                    <div className="w-[50%] flex flex-col justify-center items-center">
                        <h1 className='text-[0.6rem] sm:text-xl md:text-3xl font-bold '>Get 100% Organic</h1>
                        <p className='text-[0.45rem] sm:text-md md:text-xl'>Special and Delicious</p>
                        <Typed className='text-green-600 text-[0.55rem] sm:text-xl md:text-2xl font-bold italic font-serif'
                            strings={['Beer .', 'Hukka .', 'Vodka .', 'Beverages .', 'Wine .']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop
                        />
                    </div>
                </div>
            </section>
            <section className='max-h-[50vh]'></section>
        </Layout>
    );
};

export default Home;
