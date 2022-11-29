import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../Auth/Contex';

const ProdectCard = ({ prodect }) => {
    const { user } = useContext(authContext)
    const { name, phoneNumber, location, userPhoto, email,
        brand, orgPrice, resellPrice, imgUrl, disc, DisplayTime, divaisname } = prodect

        const FromValue =event =>{
            event.preventDefault();
            const data = event.target
            const name = data.objectName.value
            const  brand = data.brand.value
            const Prodectimg = data.ProdectimgUrl.value
            const  UserPhoto = data.photoUrl.value
            const userName = data.userName.value
            const  userEmail = data.UserEmail.value
            const UserPhone  = data.UserPhone.value
            const UserLocation  = data.UserLocation.value
            const price  = data.price.value
        

            const AllDataValue ={
                name,brand,Prodectimg,UserPhone,UserLocation,UserPhoto,userName,userEmail,price
            }
            fetch('http://localhost:5000/reqsell',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(AllDataValue)
            }) 
            .then(res => res.json())
            .then(datas =>{
                if(datas.acknowledged){
                    toast.success('Add new Product successfully')
                     data.reset();
                }
            })
            // console.log(AllDataValue)

         }
 
    return (
        <div className='shadow-lg shadow-black '>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">{name}</p>
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
                    <label htmlFor="byProdect" className="btn btn-info w-full mt-2">open modal</label>

                    <input type="checkbox" id="byProdect" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="byProdect" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={FromValue}>
                                <input readOnly name='objectName' type="text" defaultValue={divaisname} className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required readOnly name='brand' type="text" defaultValue={brand} className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required readOnly name='photoUrl' type="text" defaultValue={user.photoURL} className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required readOnly name='userName' type="text" defaultValue={user.displayName} className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required readOnly name='UserEmail' type="text" defaultValue={user.email} className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required  name='UserPhone' type="text"  placeholder='ENter Your Phone Number' className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required name='UserLocation' type="text"  placeholder='Your Location' className="input input-bordered m-2 input-info w-full max-w-xs" />
                                <input required name='price' type="text"  placeholder='Price' className="input input-bordered m-2 input-info w-full max-w-xs" />
                                 <textarea required  name='ProdectimgUrl' className="textarea textarea-primary w-full m-2" placeholder="Your Ingformation"></textarea>
                                <button type='submit' className='w-full btn btn-info m-2 max-w-xs'>Submit</button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdectCard;