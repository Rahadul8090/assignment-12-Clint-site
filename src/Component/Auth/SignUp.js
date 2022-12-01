import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { authContext } from './Contex';
import { GoogleAuthProvider } from 'firebase/auth'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';


const SignUp = () => {
    // const imgkey = process.env.REACT_APP_IMG
    // console.log(imgkey)
    const Provider = new GoogleAuthProvider()
    const { GoogleSignIn, signUps, updateUserProfile, user } = useContext(authContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location = useLocation()
    const navegate = useNavigate()
    const form = location.state?.from?.pathname || '/';
    // const [role, setRole] = useState("bayer")

    const onSubmit = data => {
        const name = data.name
        const image = data.image[0]
        const fromData = new FormData()
        fromData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=85781387e43d009f8a3e857d128738ce`

        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(datas => {
                navegate(form, { replace: true })
                signUps(data.email, data.password)
                    .then(res => {
                        const user = res.user
                        toast.success('Sign In Succrss')
                        updateUserProfile(name, datas.data.url)
                            .then(() => {
                                saveUser(data.name, data.email,data.categores)
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            }
            )
    };
    const saveUser = (name, email ,role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/allusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // getUserToken(email);
                // setCreateUserEmail(email)
            })
            .catch(err => console.error(err));
    }



    const signupWithGoogle = () => {
        GoogleSignIn(Provider)
            .then(data => {
                navegate(form, { replace: true })
                const user = data.user
                toast.success('Sign In Succrss')

            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-96">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    {
                        user && <Navigate to={form}></Navigate>
                    }
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text">catagores</span></label>
                            <select {...register("categores")} className="select select-bordered w-full max-w-xs">
                                <option>Sealler</option>
                                <option>bayer</option>
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input {...register("image", { required: true })} required type="file" name='image' className="input " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='passwrd' placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                                <label className="label">
                                    <Link to="/signin" className="label-text-alt link link-hover">Already have Acount</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submet' className="btn btn-primary">Sign up</button>
                                <button  onClick={signupWithGoogle} className="btn btn-success mt-2"><FcGoogle className='w-7 h-7 m-2' /> Sign up Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;