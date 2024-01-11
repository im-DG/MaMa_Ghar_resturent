

import React, { useState } from 'react'
import Navbar from '../Components/Admin-Navbar/Navbar'
import axios from 'axios';


const AddMenu = () => {
    const [image, setImage] = useState("")
    const [menu, setMenu] = useState({
        food_name: '',
        price: '',
        ingredient: '',
    });

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setMenu({ ...menu, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(menu, image);
        try {
            const formData = new FormData();
            formData.append('food_name', menu.food_name);
            formData.append('price', menu.price);
            formData.append('ingredient', menu.ingredient);
            formData.append('food_image', image);


            await axios.post('https://mamaghar.netlify.app/api/admin/addMenu', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }

            });

            setMenu({
                food_name: '',
                price: '',
                ingredient: '',
            });
            // }

            // Reset form fields after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center h-[100vh]">
                {/* for form */}

                <form className='flex flex-col' onSubmit={handleSubmit} encType='multipart/form-data' >
                    <div className="m-2 flex flex-col">
                        <label className='text-xl font-bold' htmlFor="Image">Image</label>
                        <input type="file"
                            className='w-[100%] sm:w-[80%] md:w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200'
                            name='food_image'
                            accept='image/png,image/gif,image/jpg,image/jpeg'
                            value={image ? image.food_name : ''}
                            onChange={handleFileChange} />
                    </div>
                    <div className="m-2 flex flex-col">
                        <label className='text-xl font-bold' htmlFor="name">Name</label>
                        <input type="text"
                            className='w-[100%] sm:w-[80%] md:w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200'
                            name='food_name'
                            placeholder='Enter Product Name'
                            value={menu.food_name}
                            onChange={handleTextChange}

                        />

                    </div>
                    <div className="m-2 flex flex-col">
                        <label className='text-xl font-bold' htmlFor="price">Price</label>
                        <input type="text"
                            className='w-[100%] sm:w-[80%] md:w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200'
                            name='price'
                            placeholder='Enter Product Price'
                            value={menu.price}
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className="m-2 flex flex-col">
                        <label className='text-xl font-bold' htmlFor="ingredient">ingredient</label>
                        <input type="text"
                            className='w-[100%] sm:w-[80%] md:w-[100%] text-xl p-2 hover:bg-blue-50 focus:bg-[#EFF1EB] shadow-inner shadow-gray-200'
                            name='ingredient'
                            placeholder='Enter ingredient Present'
                            value={menu.ingredient}
                            onChange={handleTextChange}
                        />
                    </div>
                    <button type='submit' className='my-3 text-xl font-bold bg-[#1F2455] text-white hover:bg-[#383C61] w-[100%] sm:w-[70%] md:w-[45%] h-9 rounded-lg mx-auto'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default AddMenu
