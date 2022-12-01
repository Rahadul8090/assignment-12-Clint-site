import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categores, setCategores] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-rho-self.vercel.app/categore')
            .then(res => res.json())
            .then(samsung => setCategores(samsung))
    }, [])
    // console.log(categores)


    
    return (
        <div className='w-5/6 m-auto h-4/6 rounded-2xl8 '>
            <div className="carousel m-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src="https://cdn.bolnews.com/wp-content/uploads/2022/02/gsmarena_001-3-1-1-635x380.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src="https://media.idownloadblog.com/wp-content/uploads/2022/09/iPhone-14-Pro-wallpaper-mockup-hero-idownloadblog-1536x868.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgR4hEuxBtdqoSZ0U4arZcvmApwc6tmF27iA&usqp=CAU" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/5779415_Itel%20Vision%202%20%20Plus.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src='https://www.a1fonz.com/assets/img/bae.jpg' alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album released!</h2>
                        <p>1/01/2023</p>
                    </div>
                </div>

            </div>
            {/* <div className='grid lg:grid-cols-3 gap-2 mt-5 md:grid-cols-2 w-11/12 m-auto'>
                {
                    categores.map(categore =>
                        <div key={categore._id} className="card w-80 bg-base-100 shadow-xl image-full">
                            <figure><img src={categore.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{categore.name}</h2>
                                 <div className="card-actions justify-end">
                                    <Link to={categore.name}><button className="btn btn-primary">Show Prodects</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> */}
        </div>
    );
};

export default Home;