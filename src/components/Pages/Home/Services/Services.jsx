import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div>
            <div className='text-center mt-20'>
                <h1 className='text-xl text-primary font-bold'>OUR SERVICES</h1>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                {
                    serviceData.map(data => <Service
                        key={data.id}
                        service={data}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;