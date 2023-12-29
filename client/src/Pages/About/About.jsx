import React from 'react';
import Layout from '../../Components/Layouts/Layout';
import Banner from '../../Components/Banner/Banner';
import { useAuth } from '../../store/auth';
import { MdContactMail } from 'react-icons/md'

const About = () => {
    const { user } = useAuth();

    return (
        <Layout>
            <Banner />
            <section className="w-full h-full py-8 flex flex-col items-center bg-[#e0e9ddaa]">
                <h1 className=" capitalize font-serif text-3xl">about Us</h1>
                <hr className=" my-2 w-[5%] border-2 border-black" />
                <h1>
                    Welcome {user ? ` ${user.username} to MaMa Ghar` : `to MaMa Ghar`}
                </h1>

                <div className="overflow-y-scroll w-[100%] sm:w-[90%] md:w-[80%] max-w-[100%] h-[60rem] rounded-md shadow-sm shadow-black">
                    <div className="absolute right-[35%] top-[57rem] max-w-[20%] border shadow-xl shadow-gray-500 rounded-full flex justify-center items-center ">
                        <img
                            src="../../public/about-photos/about-noodle.jpg"
                            alt="photo"
                            className=" rounded-full "
                            width={400}
                        />
                    </div>
                    <div className="flex justify-between h-full max-w-[100%]">
                        <div className="flex flex-col justify-center items-center w-[50%] h-full bg-[#62809280] rounded-l-md">
                            <h1 className="flex flex-col w-[50%]">
                                <span className="uppercase text-blue-800 text-sm sm:text-2xl font-bold my-2">
                                    testy
                                </span>
                                <span className="uppercase text-cyan-700 text-sm sm:text-3xl font-bold my-2">
                                    delicious
                                </span>
                                <span className="uppercase text-green-800 text-sm sm:text-2xl font-bold my-2">
                                    yummy
                                </span>
                            </h1>
                            <p className="max-w-[60%] max-h-[100%] text-sm sm:text-lg text-gray-500">
                                At MaMa Ghar resturent,we are serving up more than 50 types of food.In Fact, MaMA Ghar Famous (Organic Manglo Set) recipe is one of
                                our unexpected specialities. We also have a veriety of handcrafted cocktails,wine and beer to choose form.
                                <br />
                                Come dine with us and experience and authentic Organic meal in an intimate dining space. We look forward to serving you!
                            </p>
                        </div>
                        <div className=" flex justify-end items-center w-[50%] max-h-[100%] bg-[#cdcacdaa] rounded-r-md p-2 md:p-5">
                            <div className="max-w-[100%] flex justify-center items-center border rounded shadow-md">
                                <MdContactMail className='mr-5 text-[2rem] md:text-[4rem]' />
                                <div className="flex flex-col items-end">

                                    <p className='text-[0.5rem] sm:text-[1rem] text-gray-500'>000dipakchy@gmail.com</p>
                                    <p className='text-[0.5rem] sm:text-[1rem] text-gray-500'>+977 9865327410</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
