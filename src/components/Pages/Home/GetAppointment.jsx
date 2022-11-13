import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import extra from '../../../assets/images/doctor.png';

const GetAppointment = () => {
    return (
        <div className="hero mt-20 rounded-lg" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content flex-col lg:flex-row text-white ">
                <img src={extra} className=" lg:max-w-xl -mt-32" alt='' />
                <div className='lg:w-[479px]'>
                    <h1 className='text-xl text-primary font-bold mb-5'>Appointments</h1>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                    </p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;