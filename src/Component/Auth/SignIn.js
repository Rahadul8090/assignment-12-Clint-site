import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { authContext } from './Contex';
import { GoogleAuthProvider } from 'firebase/auth'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const SignIn = () => {
    const googleProvider = new GoogleAuthProvider()
    const { GoogleSignIn, signINs } = useContext(authContext)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        signINs(data.email , data.password)
        .then(data => {
            const user = data.user
            console.log(user)
        })
    };

    const loginWithGoogle = () => {
        GoogleSignIn(googleProvider)
            .then(result => {
                const users = result.user
                // console.log(users)
                toast.success('Sign In Succrss')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-96">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" {...register("email")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" {...register("password")} className="input input-bordered" />
                                <label className="label">
                                    <Link to="/signup" className="label-text-alt link link-hover">Crete New Acount</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submet' className="btn btn-primary">Login</button>
                                <button onClick={loginWithGoogle} className="btn btn-success mt-2"><FcGoogle className='w-7 h-7 m-2' /> Sign in Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;