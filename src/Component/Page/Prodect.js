import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Prodect = () => {
    const [prodect, setProdect] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/prodect/${id}`)
            .then(res => res.json())
            .then(data =>  setProdect(data))
    }, [])
    const {  names, phoneNumber, location, userPhoto, email,
        brand, orgPrice, resellPrice, imgUrl, disc, DisplayTime, divaisname} =prodect
    return (
        <div className='w-5/6 m-auto '>
            <div className="w-full p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p className="mb-0 capitalize dark:text-gray-100">Name : {divaisname}</p>
                    </div>
                    <p>{brand} Brand</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={imgUrl} alt="" className="block object-cover object-center w-full rounded-md h-auto dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{DisplayTime}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                    <div className="flex space-x-4">
                    <img alt="" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">{names}</p>
                        <span className="text-xs dark:text-gray-400">{email}</span>
                    </div>
                </div>
                     <div className='grid grid-cols-2 w-5/6 m-auto'>
                             <p className='text-xl font-bold '>MY Phone Number : {phoneNumber}</p>
                             <p className='text-xl font-bold text-red-600'>Orgiinal Price : {orgPrice}</p>
                             <p className='text-xl font-bold '>My Location : {location}</p>
                             <p className='text-xl font-bold  text-green-600'>Resele Price : {resellPrice}</p>
                      </div>
                        <p className="leading-snug dark:text-gray-400">{disc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prodect;