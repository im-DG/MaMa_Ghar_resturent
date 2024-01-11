import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div >
            <div className="min-h-[37rem] p-5 w-full bg-black text-white flex justify-center align-middle">
                <div className="md:flex justify-between h-[100%] w-[80%]">
                    <div className="md:w-[33.33%] w-[100%] flex justify-center flex-col md:mt-[-3rem] mt-[3rem] mx-[2rem]">
                        <div className="w-[100%] md:flex-col">
                            <h1 className="text-2xl font-bold font-serif my-5">MaMa Ghar</h1>
                            <p className="text-justify font-medium text-gray-400">
                                MaMa Restaurant is a family-owned business that serves authentic
                                Nepali cuisine with a modern twist. We use fresh ingredients,
                                traditional recipes, and local spices to create dishes that are
                                delicious, healthy, and satisfying. Whether you are looking for a
                                quick lunch, a romantic dinner, or a catering service for your
                                special event, we have something for everyone. Come and enjoy our
                                cozy atmosphere, friendly staff, and mouth-watering food. We look
                                forward to serving you soon!
                            </p>
                        </div>
                        <div className="flex mt-8 ">

                            <a href="https://www.facebook.com/" target='_blank'>
                                <FaFacebook className='mr-5 text-xl text-gray-400' />
                            </a>

                            <a href="https://www.instagram.com" target='_blank'>
                                <FaInstagramSquare className='mr-5 text-xl text-gray-400' />
                            </a>

                            <a href="https://www.twitter.com" target='_blank'>
                                <FaTwitter className='mr-5 text-xl text-gray-400' />
                            </a>
                        </div>

                    </div>
                    <div className="md:w-[33.33%] w-[100%] flex flex-col mx-[2rem]">
                        <h1 className='text-2xl font-bold font-serif my-10'> Open Hours</h1>
                        <div className="">

                            <h2 className="mb-2 font-medium flex text-gray-400">Sunday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-10:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Monday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-10:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Tuesday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-10:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Wednesday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-10:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Thrusday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-10:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Friday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-8:00 PM</p></h2>
                            <h2 className="mb-2 font-medium flex text-gray-400">Saturday <p className='text-gray-400 text-right w-[100%] mr-10 pr-5'>9:00 AM-8:00 PM</p></h2>
                        </div>

                    </div>
                    <div className="md:w-[33.33%] w-[100%] flex flex-col ml-[2rem]">
                        <h1 className="text-2xl font-bold font-serif my-10">Meet Owner</h1>
                        <h2 className='text-gray-400 font-medium mb-3'>Abiral Mahata(Owner)</h2>
                        <img className='w-[18rem] mt-4' src="../photos/abiral.jpg" alt="owner" />

                    </div>

                </div>
            </div>

            <div className="bg-black text-center text-gray-500">
                &copy; All right reserved to Mama Ghar resturent.
            </div>
        </div>
    );
};

export default Footer;
