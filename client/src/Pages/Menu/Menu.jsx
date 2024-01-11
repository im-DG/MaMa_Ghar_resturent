import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Banner from '../../Components/Banner/Banner'
import { useAuth } from '../../store/auth'
const Menu = () => {
    const { menu } = useAuth()

    return (
        <Layout>
            <Banner />
            <div className="max-h-full bg-[#11174A] w-full">
                <h1 className="text-center text-white text-3xl font-bold font-serif pt-8">Menus</h1>
                <hr className="w-[5%] border mx-auto my-2" />
                <div className='max-w-full max-h-full flex flex-wrap'>
                    <div className="grid lg:grid-col-4 md:grid-cols-2 gap-5 max-h-full max-w-[100%] mx-auto p-4 " >
                        {/* for cards */}
                        {menu.map((currElem, index) => {
                            const { food_image, food_name, price, ingredient } = currElem
                            return (
                                <div key={index} className="flex w-[100%] max-h-[100%] border-4 rounded-md border-gray-700 border-opacity-50 hover:scale-[1.05] duration-500">
                                    <div className="sm:w-[60%] w-[50%] h-[18rem] mr-3">
                                        <img src={`https://mamaghar.netlify.app/` + food_image} alt="foods" className="w-[100%] h-[100%] rounded-l-md" />
                                    </div>

                                    <div className="flex flex-col justify-center sm:w-[40%] w-[50%]">
                                        <h2 className="text-white my-5 capitalize md:text-[0.79rem]"><span className='font-bold '>Name:</span> {food_name}</h2>
                                        <h2 className="text-white my-5 capitalize md:text-[0.79rem]"><span className='font-bold '>Price: Rs.</span>{price}</h2>
                                        <p className="text-white my-5 capitalize md:text-[0.79rem]"><span className='font-bold'>Ingredients:</span> {ingredient}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default Menu
