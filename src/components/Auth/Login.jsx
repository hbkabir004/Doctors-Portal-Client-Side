import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { SignIn, googleSignIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginEmail, setLoginEmail] = useState('');
    // const [googleEmail, setGoogleEmail] = useState('');
    const [token] = useToken(loginEmail);
    // const [token] = useToken(googleEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignIn = data => {
        SignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignIn Successfully.');
                setLoginEmail(data.email);
            })
            .catch(error => toast.error(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignIn Successfully.');
                // setGoogleEmail(user.email);
                navigate('/')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className='flex justify-center align-middle my-20'>
            <div className='w-96 shadow-xl p-7 rounded-lg'>
                <h1 className='text-3xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-2xl">Email</span></label>
                        <input {...register(
                            "email",
                            { required: "Email is required" }
                        )}
                            type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        <label className="label"><span className="label-text-2xl">Password</span></label>
                        <input {...register(
                            "password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be strong!" }
                            }
                        )} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        <input className='btn btn-accent my-5 text-xl font-normal' value="Login" type="submit" />
                    </div>
                </form>
                <p className='text-center text-sm'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new accounts</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full my-5 text-xl font-normal' value="Login" type="submit" >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;