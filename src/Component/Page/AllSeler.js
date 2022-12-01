import React, { useEffect, useState } from 'react';

const Allseller = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allusers?role=Sealler')
            .then(res => res.json())
            .then(data => setUser(data))
    }

        , [])

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map(data =>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3"> <div>
                                    <div className="font-bold">{data.name}</div>
                                </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{data.email}</span>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{data.role}</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">make adimin</button>
                            </th>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default Allseller;