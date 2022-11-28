import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { authContext } from '../Auth/Contex';
import ProdectCard from './ProdectCard';

const Samsung = () => {
    const id = useParams()
    // console.log(id)
    const { user } = useContext(authContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/prodect')
            .then(res => res.json())
            .then(samsung => {
                const prodect = samsung.filter(categorepro => categorepro.brand === id.id)
                console.log(prodect)
                 setData(prodect)
            })
        }, [id.id])
    console.log(data)

    const localData = event => {
        event.preventDefault();
        // console.log(event.target.photoURL.value)
        const form = event.target
        const name = form.name.value
        const userPhoto = form.userPhoto.value
        const email = form.userEmail.value
        const brand = form.brand.value
        const orgPrice = form.orgPrice.value
        const resellPrice = form.resellPrice.value
        const imgUrl = form.prodectimg.value
        const disc = form.disc.value
        const phoneNumber = form.number.value
        const location = form.location.value


        const AllData = {
            name, phoneNumber, location, userPhoto, email,
            brand, orgPrice, resellPrice, imgUrl, disc
        }

        fetch('http://localhost:5000/prodect', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AllData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Add new Product successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
        console.log(AllData)
    }





    return (
        <div>
            <div>
                <img alt='' className='w-5/6 m-auto  h-96 ' src='https://www.yugatech.com/wp-content/uploads/2022/03/Samsung-Galaxy-M33-5G-Banner-720x270.jpg' />
            </div>
            <div>
                <div className='shadow-lg shadow-black w-5/6 m-auto text-center grid grid-cols-3'> 
                    {
                    data.map(card => 
                        <ProdectCard
                        key={card._id}
                        prodect={card}
                        ></ProdectCard>
                        )
                   }
                    </div>
                    <label htmlFor="my-modal-4">Add Prodect<AiOutlinePlus className='w-60 h-60 ' /></label>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold"> Rahad Vai</h3>
                        <form onSubmit={localData} className='w-96 m-auto'>
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