import React from 'react'
import Navbar from '../Components/Admin-Navbar/Navbar'
import { useAuth } from '../store/auth'
const Reservation = () => {

    const { adminReservation } = useAuth()
    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap bg-[#152247aa] w-full border border-red-500">
                {adminReservation.map((currElem, index) => {
                    const { name, date, table_no, people_count, email, phone, message } = currElem;
                    return (
                        <div key={index} className="flex flex-col justify-center h-[20%] w-[20%] m-4 border border-gray-600 rounded-md">
                            <h1 className="text-white p-2">Name: {name}</h1>
                            <h1 className="text-white p-2">Phone:{phone} </h1>
                            <h1 className="text-white p-2">Email:{email} </h1>
                            <h1 className="text-white p-2">Date:{date} </h1>
                            <h1 className="text-white p-2">Table no:{table_no} </h1>
                            <h1 className="text-white p-2">People Number:{people_count} </h1>
                            <h1 className="text-white p-2">Message:{message} </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Reservation
