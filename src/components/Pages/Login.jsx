import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    // const [data, setData] = useState("");
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center align-middle my-20'>
            <div className='w-96 shadow-xl p-7 rounded-lg'>
                <h1 className='text-3xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-2xl">Email</span></label>
                        <input {...register("email")} type="email" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text-2xl">Password</span></label>
                        <input {...register("password")} type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        <input className='btn btn-accent my-5 text-xl font-normal' value="Login" type="submit" />
                    </div>
                </form>
                <p className='text-center text-sm'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new accounts</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full my-5 text-xl font-normal' value="Login" type="submit" >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;