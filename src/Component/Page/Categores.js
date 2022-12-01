import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categores = () => {
         const [categores, setCategores] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/categore')
                .then(res => res.json())
                .then(samsung => setCategores(samsung))
        }, [])
        // console.log(categores)
    return (
        <div className='grid lg:grid-cols-3 gap-2 mt-5 md:grid-cols-2 w-11/12 m-auto'>
        {
            categores.map(categore =>
                <div key={categore._id} className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={categore.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{categore.name}</h2>
                         <div className="card-actions justify-end">
                            <Link to={`/categore/${categore.name}`}><button className="btn btn-primary">Show Prodects</button></Link>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    );
};

export default Categores;