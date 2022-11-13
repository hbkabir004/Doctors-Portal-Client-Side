import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <div className='flex'>
                <div className="avatar mr-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <h5 className='text-xl'>{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <p>{userReview}</p>
            </div>
        </div>
    );
};

export default Testimonial;