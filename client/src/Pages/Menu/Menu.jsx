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
                <h1 className="text-center text-white text-3xl font-bold font-serif">Menus</h1>
                <hr className="w-[5%] border mx-auto my-2" />

                <div className="flex gap-8 w-[80%] mx-auto p-5" >
                    {/* for cards */}
                    {menu.map((currElem, index) => {
                        const { food_image, food_name, price, ingredient } = currElem
                        return (
                            <div key={index} className="flex w-[100%] max-h-[20%] border-4 rounded-md border-gray-700 border-opacity-50 hover:scale-[1.05] duration-500">
                                <div className="w-[40%] h-[18rem] mr-3">
                                    <img src={food_image} alt="" className="w-[100%] h-[100%] rounded-l-md" />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h2 className="text-white my-5 capitalize">Name: {food_name}</h2>
                                    <h2 className="text-white my-5 capitalize">Price: Rs.{price}</h2>
                                    <p className="text-white my-5 capitalize">Ingredients: {ingredient}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Layout >
    )
}

export default Menu
