import React from 'react';
import banner from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';



const Banner = () => {
    return (
        <div className='bg-contain  w-[1363px] h-96' style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-10">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='w-[655px]'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p className="py-6 w-[400px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;