import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../PrimaryButton';

const ContactUs = () => {
    return (
        <section className='my-20 p-20 rounded-lg' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='text-center'>
                <h1 className='text-xl text-secondary font-bold'>Contact Us</h1>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div className='lg:w-2/6 mx-auto mt-10'>
                <div className="form-control my-5">
                    <input type="text" placeholder="email" className="textarea textarea-success" />
                </div>
                <div className="form-control my-5">
                    <input type="text" placeholder="subject" className="textarea textarea-success" />
                </div>
                <div className="form-control my-5">
                    <textarea type="text" placeholder="Your Message" className="textarea textarea-success" />
                </div>
                <div className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>


        </section>
    );
};

export default ContactUs;