import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { authContext } from '../Auth/Contex';

const Prodect = () => {
    const { user } = useContext(authContext)
    const [prodect, setProdect] = useState([])
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/prodect/${id}`)
            .then(res => res.json())
            .then(data => setProdect(data))
    }, [])
    const FromValue = event => {
        event.preventDefault();
        const data = event.target
        const names = data.objectName.value
        const brand = data.brand.value
        const Prodectimg = data.prodectIMG.value
        const UserPhoto = data.photoUrl.value
        const userName = data.userName.value
        const userEmail = data.UserEmail.value
        const UserPhone = data.UserPhone.value
        const UserLocation = data.UserLocation.value
        const price = data.price.value


        const AllDataValue = {
            names, brand, Prodectimg, UserPhone, UserLocation, UserPhoto, userName, userEmail, price
        }
        fetch('http://localhost:5000/reqsell', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AllDataValue)
        })
            .then(res => res.json())
            .then(datas => {
                if (datas.acknowledged) {
                    toast.success('Boking Complited')
                    data.reset();
                }
            })
        // console.log(AllDataValue)


    }
    const { names, phoneNumber, location, userPhoto, email,
        brand, orgPrice, resellPrice, imgUrl, disc, DisplayTime, divaisname } = prodect
    return (
        <div className='w-5/6 m-auto '>
            <h1 className='w-full text-3xl p-5 font-bold text-center btn-info'>Product Details</h1>
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
                        <div className='grid grid-cols-2  text-center'>
                            <p className='text-xl font-bold '>MY Phone Number : {phoneNumber}</p>
                            <p className='text-xl font-bold text-red-600'>Orgiinal Price : {orgPrice}</p>
                            <p className='text-xl font-bold '>My Location : {location}</p>
                            <p className='text-xl font-bold  text-green-600'>Resele Price : {resellPrice}</p>
                        </div>
                        <p className="leading-snug dark:text-gray-400">{disc}</p>
                        <label htmlFor="byProdect" className="btn btn-info w-4/12 m-auto">Buy Now</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="byProdect" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="byProdect" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={FromValue}>
                        <input required readOnly name='userName' type="text" defaultValue={user?.displayName} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required readOnly name='UserEmail' type="text" defaultValue={user?.email} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required readOnly name='photoUrl' type="text" defaultValue={user?.photoURL} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required readOnly name='prodectIMG' type="text" defaultValue={imgUrl} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required readOnly name='brand' type="text" defaultValue={brand} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input readOnly name='objectName' type="text" defaultValue={divaisname} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required name='price' type="text" placeholder='Price' defaultValue={resellPrice} className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required name='UserPhone' type="text" placeholder='ENter Your Phone Number' className="input input-bordered m-2 input-info w-full max-w-xs" />
                        <input required name='UserLocation' type="text" placeholder='Your Location' className="input input-bordered m-2 input-info w-full max-w-xs" />
                         <button type='submit' className='w-full btn btn-info m-2 max-w-xs'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Prodect;