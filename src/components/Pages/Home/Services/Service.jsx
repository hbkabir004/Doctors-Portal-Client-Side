import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className='rounded-lg shadow-2xl p-5'>
            <img src={img} className="max-w-sm mx-auto" alt='' />
            <div className="hero rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='text-center'>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Service;