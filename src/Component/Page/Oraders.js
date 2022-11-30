import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Auth/Contex';

const Oraders = () => {
    const { user } = useContext(authContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reqsell')
            .then(res => res.json())
            .then(boking => setData(boking))
    }, [])
    console.log(data)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(oraders =>

                                <tr>
                                    {
                                        user.email === oraders.userEmail &&
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
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>Purple</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </>

                                    }
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default Oraders;