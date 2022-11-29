import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { authContext } from '../Auth/Contex';

const ProdectCard = ({ prodect }) => {
    const {name} = useParams()
    const { user } = useContext(authContext)
    const { names, phoneNumber, location, userPhoto, email,
        brand, orgPrice, resellPrice, imgUrl, disc, DisplayTime, divaisname, _id} = prodect


    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/prodect')
    //         .then(res => res.json())
    //         .then(samsung => {
    //             const user = samsung.user
    //             console.log(user)
    //              setData(prodect)
    //         })
    // }, [])
    // console.log(data)

    

    return (
        <div className='shadow-lg shadow-black '>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">{names}</p>
                        <span className="text-xs dark:text-gray-400">{DisplayTime}</span>
                    </div>
                </div>
                <div>
                    <img src={imgUrl} alt="" className="object-cover w-full mb-4 h-44 sm:h-96 dark:bg-gray-500" />
                    <div className=''>
                        <p className='text-sm font-bold  m-2'>email : {email}</p>
                        <p className='text-sm font-bold  m-2'>Phone : {phoneNumber}</p>
                        <div className='flex justify-around'>
                            <p className='text-sm font-bold  m-2'>Brand : {brand}</p>
                            <p className='text-sm font-bold  m-2'>Location: {location}</p>
                        </div>
                        <div className='flex justify-around'>
                            <p className='text-lg font-bold text-red-600  m-2'>Market Price : {orgPrice}</p>
                            <p className='text-lg font-bold text-green-600  m-2'>Resele Price : {resellPrice}</p>
                        </div>
                    </div>
                    <h2 className="mb-1 text-xl font-semibold"> {divaisname}</h2>
                    <p className="text-sm dark:text-gray-400">{disc.slice(0, 300)}...</p>

                    <Link to={`/categore/${name}/${_id}`}><button className='w-full btn btn-info m-2'>See Details</button></Link>

                  
                </div>
            </div>
        </div>
    );
};

export default ProdectCard;