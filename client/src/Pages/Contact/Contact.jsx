import React, { useState } from 'react';
import Layout from '../../Components/Layouts/Layout';
import { useAuth } from '../../store/auth';
const Contact = () => {


    const [contact, setContact] = useState({
        email: '',
        phone: '',
        message: '',
    });


    const { user } = useAuth()

    const [userData, setUserData] = useState(true)
    if (userData && user) {
        setContact({
            email: user.email,
            phone: user.phone,
            message: ""
        })
        setUserData(false)
    }


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            const response = await fetch(`http://localhost:2024/api/form/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setContact({
                    email: '',
                    phone: '',
                    message: '',
                });
            }
            console.log(response);
        } catch (error) {
            console.log('message', error);
        }
    };
    return (
        <Layout >
            <div className="bg-[#11174A] max-h-[100%] w-full">
                <div className="flex justify-center align-middle rounded-md max-h-[100%]">
                    <div className=" flex justify-center max-h-[100%]] w-[80%] rounded-md">{/* bg-[url('../../public/photos/signup_bg.jpg')] */}
                        <div className="w-[100%] sm:w-[80%] md:w-[50%] h-[100%] m-auto mt-8 flex flex-col justify-center align-middle hover:scale-[103%] duration-700 hover:shadow-2xl hover:shadow-gray-200">
                            <div className=" rounded-t-lg bg-green-50 pt-5">
                                <h1 className="text-center font-bold text-xl md:text-3xl font-serif">
                                    Contact Us
                                </h1>
                                <hr className="border-[0.12rem] border-black w-[30%] m-auto mt-2" />
                            </div>


                            {/* form section */}
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-b-lg pt-7 px-5 bg-green-50 flex flex-col justify-center h-[100%]"
                                action=""
                            >
                                <div className="flex justify-center flex-col m-2">
                                    <label
                                        className="capitalize font-bold font-serif my-1"
                                        htmlFor="email"
                                    >
                                        email :
                                    </label>
                                    <input
                                        type="email"
                                        className="w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name="email"
                                        value={contact.email}
                                        onChange={handleInput}
                                        placeholder="Enter email"
                                        id="email"
                                    />
                                </div>
                                <div className="flex justify-center flex-col m-2">
                                    <label
                                        className="capitalize font-bold font-serif my-1"
                                        htmlFor="phone"
                                    >
                                        phone :
                                    </label>
                                    <input
                                        type="number"
                                        className="w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name="phone"
                                        value={contact.phone}
                                        onChange={handleInput}
                                        placeholder="Enter phone number"
                                        id="phone"
                                    />
                                </div>
                                <div className="flex justify-center flex-col m-2">
                                    <label
                                        className="capitalize font-bold font-serif my-1"
                                        htmlFor="message"
                                    >
                                        message :
                                    </label>
                                    <textarea
                                        className="w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200"
                                        name="message"
                                        value={contact.message}
                                        onChange={handleInput}
                                        placeholder="Enter message"
                                        id="message"
                                        cols="20"
                                        rows="5"
                                    />
                                </div>
                                <button
                                    className="my-3 text-xl font-bold bg-[#1F2455] text-white hover:bg-[#383C61] w-[100%] sm:w-[70%] md:w-[45%] h-9 rounded-lg mx-auto"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <section className="pt-3 mt-8">
                    <h1 className='text-white uppercase text-xl sm:text-3xl text-center font-bold font-serif mt-7'>Get Location</h1>
                    <hr className="w-[20%] sm:w-[10%] m-auto border-[0.15rem] " />
                    <iframe className='mt-5'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.
                    65221574618562!2d85.37016315696481!3d27.
                    688439317061675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                    1!3m3!1m2!1s0x39eb1a3c1e6d0dfd%3A0xa87bde1a5fd7c866!2sM9QC%2B952%2C%20Dibyashwori%2044800!5e0!3m2!1sen!2snp!4v1703071209033!5m2!1sen!2snp"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
