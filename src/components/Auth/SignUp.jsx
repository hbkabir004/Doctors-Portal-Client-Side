import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    if(token){
        navigate('/');
    }
    const userInfo = {
        displayName: data.name,
    }

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser(userInfo)
                    .then(() => {
                        toast.warning('User Profile Updated!');
                        saveUser(data.name, data.email)
                    })
                    .catch(err => toast.error(err.message))

                toast.success('User Created Successfully.');
            })
            .catch(error => toast.error(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.');
            })
            .catch(err => toast.error(err.message))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })

    }

    return (
        <div className='flex justify-center align-middle my-20'>
            <div className='w-96 shadow-xl p-7 rounded-lg'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-2xl">Name</span></label>
                        <input {...register(
                            "name",
                            { required: "Name is required" }
                        )}
                            type="name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
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
                        <input className='btn btn-accent my-5 text-xl font-normal' value="Sign Up" type="submit" />
                    </div>
                </form>
                <p className='text-center text-sm'>Already have an account? <Link className='text-secondary' to='/login'>Login</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full my-5 text-xl font-normal' value="Login" type="submit" >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;