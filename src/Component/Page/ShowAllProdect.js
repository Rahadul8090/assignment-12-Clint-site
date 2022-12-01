import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowAllProdect = () => {
    const {name} = useParams()
    // console.log(name)  
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/prodect')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)

            })
    }, [])

//    const  { names, phoneNumber, location, userPhoto, email,
//         brand, orgPrice, resellPrice, imgUrl, disc, DisplayTime, divaisname, _id} =data
//     console.log(data)
    return (
        <div>
            {
                data.map(prodect =>
                    <div key={prodect._id} className='shadow-lg shadow-black '>
                        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex space-x-4">
                                <img alt="" src={prodect.userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-semibold">{prodect.names}</p>
                                    <span className="text-xs dark:text-gray-400">{prodect.DisplayTime}</span>
                                </div>
                            </div>
                            <div>
                                <img src={prodect.imgUrl} alt="" className="object-cover w-full mb-4 h-44 sm:h-96 dark:bg-gray-500" />
                                <div className=''>
                                    <p className='text-sm font-bold  m-2'>email : {prodect.email}</p>
                                    <p className='text-sm font-bold  m-2'>Phone : {prodect.phoneNumber}</p>
                                    <div className='flex justify-around'>
                                        <p className='text-sm font-bold  m-2'>Brand : {prodect.brand}</p>
                                        <p className='text-sm font-bold  m-2'>Location: {prodect.location}</p>
                                    </div>
                                    <div className='flex justify-around'>
                                        <p className='text-lg font-bold text-red-600  m-2'>Market Price : {prodect.orgPrice}</p>
                                        <p className='text-lg font-bold text-green-600  m-2'>Resele Price : {prodect.resellPrice}</p>
                                    </div>
                                </div>
                                <h2 className="mb-1 text-xl font-semibold"> {prodect.divaisname}</h2>
                                <p className="text-sm dark:text-gray-400">{prodect.disc.slice(0, 300)}...</p>

                                <Link to={`/deshbord/${name}/${prodect._id}`}><button className='w-full btn btn-info m-2'>See Details</button></Link>


                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ShowAllProdect;