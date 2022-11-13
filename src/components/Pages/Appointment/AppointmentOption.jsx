import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-secondary">{name}</h2>
                <div className='my-2'>
                    <p >{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p >{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                </div>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(option)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;