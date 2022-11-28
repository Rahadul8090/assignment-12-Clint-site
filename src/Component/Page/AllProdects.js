import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { authContext } from '../Auth/Contex';

const Samsung = () => {
    const id = useParams()
    // console.log(id)
    const { user } = useContext(authContext)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/categore')
    //         .then(res => res.json())
    //         .then(samsung => setData(samsung))
    // }, [])


    const FormData = event => {
        event.preventDefault();
        // console.log(event.target.photoURL.value)
        const data = event.target
        const name = data.name.value
        const userPhoto = data.userPhoto.value
        const email = data.userEmail.value
        const brand = data.brand.value
        const orgPrice = data.orgPrice.value
        const resellPrice = data.resellPrice.value
        const imgUrl = data.prodectimg.value
        const disc = data.disc.value
        const phoneNumber = data.number.value
        const location = data.location.value

        const AttData ={name,phoneNumber,location, userPhoto, email, brand, orgPrice, resellPrice, imgUrl, disc}
        console.log(AttData)
    }
    return (
        <div>
            <div>
                <img alt='' className='w-5/6 m-auto  h-96 ' src='https://www.yugatech.com/wp-content/uploads/2022/03/Samsung-Galaxy-M33-5G-Banner-720x270.jpg' />
            </div>
            <div>
                <div className='shadow-lg shadow-black w-5/6 m-auto text-center'> <label htmlFor="my-modal-4">Add Prodect<AiOutlinePlus className='w-60 h-60 ' /></label></div>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold"> Rahad Vai</h3>
                        <form onSubmit={FormData} className='w-96 m-auto'>
                            <input name='name' type="text" placeholder="name" defaultValue={user.displayName} className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='userPhoto' type="text" placeholder="" defaultValue={user.photoURL} className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='userEmail' type="text" placeholder="email" defaultValue={user.email} className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='brand' type="text" placeholder="brand" defaultValue={id.id} className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='number' type="number" placeholder="Phone Number" className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='location' type="text" placeholder="Location" className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='orgPrice' type="number" placeholder=" Orgenal Price " className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='resellPrice' type="number" placeholder="Resell Price " className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='time' type="date" placeholder="pu Time" className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <input name='prodectimg' type="text" placeholder="Prodect img Link" className="input input-bordered m-2 input-info w-full max-w-xs" />
                            <textarea name='disc' className="textarea textarea-primary w-full m-2" placeholder="Bio"></textarea>
                            <button type='submit' className='btn w-full m-2'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Samsung;