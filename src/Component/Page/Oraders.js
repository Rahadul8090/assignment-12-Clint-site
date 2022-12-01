import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Auth/Contex';
import Loading from './Loading';

const Oraders = () => {
    const { user, loading } = useContext(authContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-rho-self.vercel.app/reqsell')
            .then(res => res.json())
            .then(boking => setData(boking))
    }, [])
    console.log(data)

    const load = () => {
        const data = ' loading....'
        console.log(data)

    }

    return (
        <div>
            <h1 className='w-full p-5 text-center bg-indigo-500 text-3xl'>Your Oraders
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email/Number</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(oraders =>
                                <tr>
                                    {
                                        user?.email === oraders?.userEmail &&
                                        <>
                                            {data?
                                             <>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={oraders.Prodectimg} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{oraders.names}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {oraders.UserPhone}
                                                        <br />
                                                        <span className="badge badge-ghost badge-sm">{oraders.userEmail}</span>
                                                    </td>
                                                    <td>{oraders.price}Tk</td>
                                                    <th>
                                                        <button className="btn btn-ghost btn-xs">Premet Now</button>
                                                    </th>
                                                </>
                                                :
                                                <Loading className='p-52'>Loading...</Loading>
                                             }
                                        </>
                                    }
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default Oraders;