import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../PrimaryButton';



const Banner = () => {
    return (
        <div className='bg-contain  lg:w-[1363px] lg:h-96' style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:p-10">
                    <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:w-[655px]'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p className="py-6 lg:w-[400px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/appointment'><PrimaryButton>Get Started</PrimaryButton></Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;